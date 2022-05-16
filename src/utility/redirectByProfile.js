const routesByProfile = {
  auth: "/",
  user: "/vagas",
  admin: "/",
  company: "/cadastrar-vaga",
  anonimo: "/",
};

export default function (profile, history) {
  history.push(routesByProfile[profile]);
}
