import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { BarChart } from "@mui/x-charts/BarChart";
import { useGetLastTodosQuery } from "../../redux/features/todo/todo.api";

import { formatDataArray } from "../../lib/dateFunctions";
import { Box, Button, Skeleton, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const TodoOverview = ({
  showRandom,
  setShowRandom,
}: {
  showRandom: boolean;
  setShowRandom: Dispatch<SetStateAction<boolean>>;
}) => {
  const { data, isLoading } = useGetLastTodosQuery(undefined);

  const [dates, setDates] = useState<string[]>([]);
  const [values, setValues] = useState<number[]>([]);
  const [randomValue] = useState<number[]>(() =>
    Array.from({ length: 30 }, () => Math.floor(Math.random() * 21))
  );

  useEffect(() => {
    if (data?.data?.lastdays) {
      const { dates, values } = formatDataArray(data?.data?.lastdays);

      setDates(dates);
      if (showRandom) {
        setValues(randomValue);
      } else {
        setValues(values);
      }
    }
  }, [data, showRandom]);

  return (
    <div>
      <Typography>Todo Overview:</Typography>
      <Typography fontSize={13}>last 30 days:</Typography>
      <Button
        variant="contained"
        size="small"
        onClick={() => setShowRandom(!showRandom)}
      >
        {showRandom ? "Show real data" : "Show fake data"}
      </Button>
      <Box>{isLoading && <Skeleton sx={{ margin: 0 }} height={400} />}</Box>
      {dates.length > 0 && (
        <>
          <BarChart
            // colors={[green[500]]}
            xAxis={[
              {
                id: "barCategories",
                data: dates,
                scaleType: "band",
              },
            ]}
            series={[{ data: values, label: "todos completed" , color:blue[400]}]}
            height={300}
          />
        </>
      )}
    </div>
  );
};

export default TodoOverview;
