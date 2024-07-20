import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <div className="w-1/4 flex flex-col justify-center m-10 items-center gap-4 p-5 border border-slate-50 rounded-xl shadow-md">
      <CircularProgress />
    </div>
  );
}
