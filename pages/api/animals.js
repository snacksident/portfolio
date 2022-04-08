// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function animals(req, res) {
    const animals = ['cat','dog','capybara','ostrich','pangolin','bull','guinea pig','armadillo']
    //get a random animal out of this list
    const rando = animals[Math.floor(Math.random()*animals.length)]
    res.status(200).json({rando})
  }
  