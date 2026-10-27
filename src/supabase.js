import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://xqomrkcegsqscngqlfig.supabase.co'
const supabaseKey = 'sb_publishable_OB1V8tUGQfJf_bSDSMkfxw_QH5TR27W'

const supabase = createClient(supabaseUrl, supabaseKey)
