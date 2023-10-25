# \CashieringConfigApi

All URIs are relative to */fof/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CalculatePosting**](CashieringConfigApi.md#CalculatePosting) | **Get** /hotels/{hotelId}/transactionCodes/{transactionCode}/chargeSimulations | Operation to CalculatePosting.
[**ChangeCompTypes**](CashieringConfigApi.md#ChangeCompTypes) | **Put** /compTypes | Operation to Change Comp Types.
[**ChangeFiscalCommands**](CashieringConfigApi.md#ChangeFiscalCommands) | **Put** /hotels/{hotelId}/fiscalCommands | Change configuration fiscal commands
[**ChangeFiscalPartners**](CashieringConfigApi.md#ChangeFiscalPartners) | **Put** /hotels/{hotelId}/fiscalPartners | Change configuration fiscal partners
[**ChangeFolioTypeLegendMappingConfig**](CashieringConfigApi.md#ChangeFolioTypeLegendMappingConfig) | **Put** /folioTypeLegendMappings | Operation to change folio type legend mappings config.
[**CopyAdjustmentCodes**](CashieringConfigApi.md#CopyAdjustmentCodes) | **Put** /hotelAdjustmentCodes/copy | Operation to copy AdjustmentCodes.
[**CopyCustomChargeExemptionsConfig**](CashieringConfigApi.md#CopyCustomChargeExemptionsConfig) | **Post** /hotels/{sourceHotelId}/customCharges/exemptions/copy | Operation to copy Custom Charge Exemptions Config.
[**CopyExpenseArrangementCodes**](CashieringConfigApi.md#CopyExpenseArrangementCodes) | **Put** /expenseArrangementCodes/copy | Operation to copy ExpenseArrangementCodes.
[**CopyFiscalFolioParameters**](CashieringConfigApi.md#CopyFiscalFolioParameters) | **Put** /hotels/{sourceHotelId}/fiscalFolioParameters/copy | Operation to copy FiscalFolioParameters.
[**CopyFolioArrangementCodes**](CashieringConfigApi.md#CopyFolioArrangementCodes) | **Put** /folioArrangementCodes/copy | Operation to copy FolioArrangementCodes.
[**CopyGroupArrangementCodes**](CashieringConfigApi.md#CopyGroupArrangementCodes) | **Put** /groupArrangementCodes/copy | Operation to copy GroupArrangementCodes.
[**CopyPackageArrangementCodes**](CashieringConfigApi.md#CopyPackageArrangementCodes) | **Put** /packageArrangementCodes/copy | Operation to copy PackageArrangementCodes.
[**CopyPaymentMethods**](CashieringConfigApi.md#CopyPaymentMethods) | **Put** /hotelPaymentMethods/copy | Operation to copy PaymentMethods.
[**CopyRevenueBucketCodes**](CashieringConfigApi.md#CopyRevenueBucketCodes) | **Put** /revenueBucketCodes/copy | Operation to copy RevenueBucketCodes.
[**CopyRevenueBucketTypes**](CashieringConfigApi.md#CopyRevenueBucketTypes) | **Put** /revenueBucketTypes/copy | Operation to copy RevenueBucketTypes.
[**CopyRevenueTypeMapping**](CashieringConfigApi.md#CopyRevenueTypeMapping) | **Put** /revenueTypeMapping/copy | Operation to copy RevenueTypeMapping.
[**CopyRoutingInstructions**](CashieringConfigApi.md#CopyRoutingInstructions) | **Put** /routingInstructions/copy | Operation to copy RoutingInstructions.
[**CopyTaxBrackets**](CashieringConfigApi.md#CopyTaxBrackets) | **Put** /taxBrackets/copy | Operation to copy TaxBrackets.
[**CopyTaxTypes**](CashieringConfigApi.md#CopyTaxTypes) | **Put** /hotelTaxTypes/copy | Operation to copy TaxTypes.
[**CopyTransactionCodes**](CashieringConfigApi.md#CopyTransactionCodes) | **Put** /transactionCodes/copy | Operation to copy TransactionCodes.
[**CopyTransactionGroups**](CashieringConfigApi.md#CopyTransactionGroups) | **Put** /transactionGroups/copy | Operation to copy TransactionGroups.
[**CopyTransactionSubgroups**](CashieringConfigApi.md#CopyTransactionSubgroups) | **Put** /transactionSubGroups/copy | Operation to copy TransactionSubgroups.
[**DeleteAdjustmentCodes**](CashieringConfigApi.md#DeleteAdjustmentCodes) | **Delete** /hotelAdjustmentCodes | Operation to delete AdjustmentCodes.
[**DeleteArticles**](CashieringConfigApi.md#DeleteArticles) | **Delete** /articles | Operation to delete Articles.
[**DeleteAuthorizationConfigRule**](CashieringConfigApi.md#DeleteAuthorizationConfigRule) | **Delete** /authorizationConfigRule | Operation to delete AuthorizationConfigRule.
[**DeleteAuthorizerGroups**](CashieringConfigApi.md#DeleteAuthorizerGroups) | **Delete** /authorizerGroups | Operation to delete AuthorizerGroups.
[**DeleteBudgetForecast**](CashieringConfigApi.md#DeleteBudgetForecast) | **Put** /budgetForecast | Operation to delete BudgetForecast.
[**DeleteCollectingAgentTaxes**](CashieringConfigApi.md#DeleteCollectingAgentTaxes) | **Delete** /collectingAgentTaxes | Operation to delete CollectingAgentTaxes.
[**DeleteCompBucketRedemptionConfig**](CashieringConfigApi.md#DeleteCompBucketRedemptionConfig) | **Delete** /hotels/{hotelId}/compBucket/redemption/{redemptionCode} | Operation to remove Comp Bucket Redemption Codes.
[**DeleteCurrencyExchangeServiceTaxes**](CashieringConfigApi.md#DeleteCurrencyExchangeServiceTaxes) | **Delete** /currencyExchangeServiceTaxes | Operation to delete CurrencyExchangeServiceTaxes.
[**DeleteCustomChargeExemptionsConfig**](CashieringConfigApi.md#DeleteCustomChargeExemptionsConfig) | **Delete** /hotels/{hotelId}/customCharges/exemptions/{configurationId} | Operation to remove Custom Charge Exemptions Config.
[**DeleteCustomChargesConfig**](CashieringConfigApi.md#DeleteCustomChargesConfig) | **Delete** /hotels/{hotelId}/customCharges/configuration/{configurationId} | Operation to remove Custom Charge Codes.
[**DeleteCustomNumberConfig**](CashieringConfigApi.md#DeleteCustomNumberConfig) | **Delete** /hotels/{hotelId}/customNumbers/configuration/{configurationId} | Operation to remove custom number config.
[**DeleteExchangeRates**](CashieringConfigApi.md#DeleteExchangeRates) | **Put** /exchangeRates | Operation to delete ExchangeRates.
[**DeleteExpenseArrangementCodes**](CashieringConfigApi.md#DeleteExpenseArrangementCodes) | **Delete** /expenseArrangementCodes | Operation to delete ExpenseArrangementCodes.
[**DeleteFiscalFolioParameters**](CashieringConfigApi.md#DeleteFiscalFolioParameters) | **Delete** /fiscalFolioParameters | Operation to delete FiscalFolioParameters.
[**DeleteFiscalPeriods**](CashieringConfigApi.md#DeleteFiscalPeriods) | **Delete** /fiscalPeriods | Operation to delete FiscalPeriods.
[**DeleteFiscalYears**](CashieringConfigApi.md#DeleteFiscalYears) | **Delete** /fiscalYears | Operation to delete FiscalYears.
[**DeleteFolioArrangementCodes**](CashieringConfigApi.md#DeleteFolioArrangementCodes) | **Delete** /folioArrangementCodes | Operation to delete FolioArrangementCodes.
[**DeleteFolioPrintQueues**](CashieringConfigApi.md#DeleteFolioPrintQueues) | **Delete** /folioPrintQueues | Operation to delete FolioPrintQueues.
[**DeleteFolioTypesConfig**](CashieringConfigApi.md#DeleteFolioTypesConfig) | **Delete** /folioTypesConfig | Operation to delete FolioTypesConfig.
[**DeleteForeignCurrencies**](CashieringConfigApi.md#DeleteForeignCurrencies) | **Delete** /foreignCurrencies | Operation to delete ForeignCurrencies.
[**DeleteGlobalExchangeRates**](CashieringConfigApi.md#DeleteGlobalExchangeRates) | **Put** /globalExchangeRates | Operation to delete GlobalExchangeRates.
[**DeleteGroupArrangementCodes**](CashieringConfigApi.md#DeleteGroupArrangementCodes) | **Delete** /groupArrangementCodes | Operation to delete GroupArrangementCodes.
[**DeleteNoShowPostingRules**](CashieringConfigApi.md#DeleteNoShowPostingRules) | **Delete** /noShowPostingRules | Operation to delete NoShowPostingRules.
[**DeletePackageArrangementCodes**](CashieringConfigApi.md#DeletePackageArrangementCodes) | **Delete** /packageArrangementCodes | Operation to delete PackageArrangementCodes.
[**DeleteRevenueBucketCodes**](CashieringConfigApi.md#DeleteRevenueBucketCodes) | **Delete** /revenueBucketCodes | Operation to delete RevenueBucketCodes.
[**DeleteRevenueBucketTypes**](CashieringConfigApi.md#DeleteRevenueBucketTypes) | **Delete** /revenueBucketTypes | Operation to delete RevenueBucketTypes.
[**DeleteRevenueTypeMapping**](CashieringConfigApi.md#DeleteRevenueTypeMapping) | **Delete** /revenueTypeMapping | Operation to delete RevenueTypeMapping.
[**DeleteRoutingInstructions**](CashieringConfigApi.md#DeleteRoutingInstructions) | **Delete** /routingInstructions | Operation to delete RoutingInstructions.
[**DeleteTaxBrackets**](CashieringConfigApi.md#DeleteTaxBrackets) | **Delete** /taxBrackets | Operation to delete TaxBrackets.
[**DeleteTaxTypes**](CashieringConfigApi.md#DeleteTaxTypes) | **Delete** /hotelTaxTypes | Operation to delete TaxTypes.
[**DeleteTemplateCustomNumber**](CashieringConfigApi.md#DeleteTemplateCustomNumber) | **Delete** /template/customNumbers | Operation to remove template custom number configuration.
[**DeleteTemplateCustomNumberConfig**](CashieringConfigApi.md#DeleteTemplateCustomNumberConfig) | **Delete** /hotels/{hotelId}/template/customNumbers/configuration/{configurationId} | Operation to remove template custom number configuration.
[**DeleteTemplateTransactionCodes**](CashieringConfigApi.md#DeleteTemplateTransactionCodes) | **Delete** /templateTransactionCodes | Operation to delete TemplateTransactionCodes.
[**DeleteTemplateTransactionGroups**](CashieringConfigApi.md#DeleteTemplateTransactionGroups) | **Delete** /templateTransactionGroups | Operation to delete TemplateTransactionGroups.
[**DeleteTemplateTransactionSubgroups**](CashieringConfigApi.md#DeleteTemplateTransactionSubgroups) | **Delete** /templateTransactionSubGroups | Operation to delete TemplateTransactionSubgroups.
[**DeleteTransactionCodes**](CashieringConfigApi.md#DeleteTransactionCodes) | **Delete** /hotels/{hotelId}/transactionCodes/{transactionCode}/transactionCodes | Operation to delete TransactionCodes.
[**DeleteTransactionDiscounts**](CashieringConfigApi.md#DeleteTransactionDiscounts) | **Delete** /hotels/{hotelId}/transactionDiscounts/{transactionDiscountCode} | Operation to delete TransactionDiscounts.
[**DeleteTransactionGroups**](CashieringConfigApi.md#DeleteTransactionGroups) | **Delete** /transactionGroups | Operation to delete TransactionGroups.
[**DeleteTransactionSubgroups**](CashieringConfigApi.md#DeleteTransactionSubgroups) | **Delete** /transactionSubGroups | Operation to delete TransactionSubgroups.
[**GetAdjustmentCodes**](CashieringConfigApi.md#GetAdjustmentCodes) | **Get** /hotelAdjustmentCodes | Operation to fetch AdjustmentCodes.
[**GetArticles**](CashieringConfigApi.md#GetArticles) | **Get** /articles | Get articles
[**GetAuthorizationConfigRules**](CashieringConfigApi.md#GetAuthorizationConfigRules) | **Get** /authorizationConfigRules | Operation to fetch AuthorizationConfigRules.
[**GetAuthorizerGroups**](CashieringConfigApi.md#GetAuthorizerGroups) | **Get** /authorizerGroups | Operation to fetch AuthorizerGroups.
[**GetAvailableCashierNumber**](CashieringConfigApi.md#GetAvailableCashierNumber) | **Get** /cashiers/nextAvailable | Operation to fetch AvailableCashierNumber.
[**GetBudgetForecast**](CashieringConfigApi.md#GetBudgetForecast) | **Get** /budgetForecast | Operation to fetch BudgetForecast.
[**GetCashiers**](CashieringConfigApi.md#GetCashiers) | **Get** /cashierDetails/cashiers | Get cashiers
[**GetCollectingAgentTaxes**](CashieringConfigApi.md#GetCollectingAgentTaxes) | **Get** /collectingAgentTaxes | Operation to fetch CollectingAgentTaxes.
[**GetCompAuthorizers**](CashieringConfigApi.md#GetCompAuthorizers) | **Get** /hotels/{hotelId}/compAuthorizers | Operation to fetch CompAuthorizers.
[**GetCompBucketRedemptionCodes**](CashieringConfigApi.md#GetCompBucketRedemptionCodes) | **Get** /hotels/{hotelId}/compBucket/redemption | Operation to fetch Comp Bucket Redemption Codes.
[**GetCompBucketRedemptionConfig**](CashieringConfigApi.md#GetCompBucketRedemptionConfig) | **Get** /hotels/{hotelId}/compBucket/redemption/{redemptionCode} | Operation to fetch Comp Bucket Redemption Codes.
[**GetCompTypes**](CashieringConfigApi.md#GetCompTypes) | **Get** /hotels/{hotelId}/compTypes | Operation to Fetch Comp Types.
[**GetCurrencyExchangeServiceTaxes**](CashieringConfigApi.md#GetCurrencyExchangeServiceTaxes) | **Get** /currencyExchangeServiceTaxes | Operation to fetch CurrencyExchangeServiceTaxes.
[**GetCustomChargeCodes**](CashieringConfigApi.md#GetCustomChargeCodes) | **Get** /hotels/{hotelId}/customCharges | Operation to fetch Custom Charge Codes.
[**GetCustomChargeExemptions**](CashieringConfigApi.md#GetCustomChargeExemptions) | **Get** /customCharges/exemptions | Operation to fetch Custom Charge Exemptions Config.
[**GetCustomChargeExemptionsConfig**](CashieringConfigApi.md#GetCustomChargeExemptionsConfig) | **Get** /hotels/{hotelId}/customCharges/exemptions/{configurationId} | Operation to fetch Custom Charge Exemptions Config.
[**GetCustomChargesConfig**](CashieringConfigApi.md#GetCustomChargesConfig) | **Get** /hotels/{hotelId}/customCharges/configuration/{configurationId} | Operation to fetch Custom Charge Codes.
[**GetCustomNumberConfig**](CashieringConfigApi.md#GetCustomNumberConfig) | **Get** /hotels/{hotelId}/customNumbers/configuration/{configurationId} | Operation to fetch custom number config.
[**GetCustomNumbers**](CashieringConfigApi.md#GetCustomNumbers) | **Get** /hotels/{hotelId}/customNumbers | Operation to fetch custom number config.
[**GetDailyPlanCodes**](CashieringConfigApi.md#GetDailyPlanCodes) | **Get** /dailyPlanCodes | Operation to fetch DailyPlanCodes.
[**GetDefaultPaymentMethodRule**](CashieringConfigApi.md#GetDefaultPaymentMethodRule) | **Get** /defaultPaymentMethodRules | Operation to fetch DefaultPaymentMethodRule.
[**GetExchangeRates**](CashieringConfigApi.md#GetExchangeRates) | **Get** /hotels/{hotelId}/exchangeRates | Operation to fetch ExchangeRates.
[**GetExchangeRatesInfo**](CashieringConfigApi.md#GetExchangeRatesInfo) | **Get** /exchangeRates | Operation to fetch ExchangeRates.
[**GetExpenseArrangementCodes**](CashieringConfigApi.md#GetExpenseArrangementCodes) | **Get** /expenseArrangementCodes | Operation to fetch ExpenseArrangementCodes.
[**GetFiscalCommands**](CashieringConfigApi.md#GetFiscalCommands) | **Get** /hotels/{hotelId}/fiscalCommands | Get Fiscal Commands
[**GetFiscalFolioParameters**](CashieringConfigApi.md#GetFiscalFolioParameters) | **Get** /fiscalFolioParameters | Operation to fetch FiscalFolioParameters.
[**GetFiscalPartners**](CashieringConfigApi.md#GetFiscalPartners) | **Get** /hotels/{hotelId}/fiscalPartners | Get fiscal partners
[**GetFiscalPeriods**](CashieringConfigApi.md#GetFiscalPeriods) | **Get** /fiscalPeriods | Operation to fetch FiscalPeriods.
[**GetFiscalYears**](CashieringConfigApi.md#GetFiscalYears) | **Get** /fiscalYears | Operation to fetch FiscalYears.
[**GetFolioArrangementCodes**](CashieringConfigApi.md#GetFolioArrangementCodes) | **Get** /folioArrangementCodes | Operation to fetch FolioArrangementCodes.
[**GetFolioCopyLegends**](CashieringConfigApi.md#GetFolioCopyLegends) | **Get** /folioCopyLegends | Operation to fetch FolioCopyLegends.
[**GetFolioPrintQueues**](CashieringConfigApi.md#GetFolioPrintQueues) | **Get** /folioPrintQueues | Operation to fetch FolioPrintQueues.
[**GetFolioTypeLegendMappingsConfig**](CashieringConfigApi.md#GetFolioTypeLegendMappingsConfig) | **Get** /folioTypeLegendMappings | Operation to fetch folio type legend mappings config.
[**GetFolioTypesConfig**](CashieringConfigApi.md#GetFolioTypesConfig) | **Get** /folioTypesConfig | Operation to fetch FolioTypesConfig.
[**GetForeignCurrencies**](CashieringConfigApi.md#GetForeignCurrencies) | **Get** /foreignCurrencies | Operation to fetch ForeignCurrencies.
[**GetFuturePastExchangeRates**](CashieringConfigApi.md#GetFuturePastExchangeRates) | **Get** /hotels/{hotelId}/exchangeRates/{currencyCode} | Operation to fetch FuturePastExchangeRates.
[**GetGUINumberRules**](CashieringConfigApi.md#GetGUINumberRules) | **Get** /guiNumberRules | Operation to fetch GUINumberRules.
[**GetGenerateTaxTypes**](CashieringConfigApi.md#GetGenerateTaxTypes) | **Get** /hotels/{hotelId}/generates | Operation to fetch GenerateTaxTypes.
[**GetGlobalExchangeRatesInfo**](CashieringConfigApi.md#GetGlobalExchangeRatesInfo) | **Get** /globalExchangeRates | Operation to fetch GlobalExchangeRates.
[**GetGroupArrangementCodes**](CashieringConfigApi.md#GetGroupArrangementCodes) | **Get** /groupArrangementCodes | Operation to create GroupArrangementCodes.
[**GetNoShowPostingRules**](CashieringConfigApi.md#GetNoShowPostingRules) | **Get** /noShowPostingRules | Operation to fetch NoShowPostingRules.
[**GetNumberDescriptions**](CashieringConfigApi.md#GetNumberDescriptions) | **Get** /numberDescriptions | Operation to fetch NumberDescriptions.
[**GetOperaControlSequences**](CashieringConfigApi.md#GetOperaControlSequences) | **Get** /operaControlSequences | Operation to fetch OperaControlSequences.
[**GetPackageArrangementCodes**](CashieringConfigApi.md#GetPackageArrangementCodes) | **Get** /packageArrangementCodes | Operation to fetch PackageArrangementCodes.
[**GetPaymentMethods**](CashieringConfigApi.md#GetPaymentMethods) | **Get** /hotelPaymentMethods | Operation to fetch PaymentMethods.
[**GetRevenueBucketCodes**](CashieringConfigApi.md#GetRevenueBucketCodes) | **Get** /revenueBucketCodes | Operation to fetch RevenueBucketCodes.
[**GetRevenueBucketTypes**](CashieringConfigApi.md#GetRevenueBucketTypes) | **Get** /revenueBucketTypes | Operation to fetch RevenueBucketTypes.
[**GetRevenueTypeMapping**](CashieringConfigApi.md#GetRevenueTypeMapping) | **Get** /revenueTypeMapping | Operation to fetch RevenueTypeMapping.
[**GetRoutingInstructions**](CashieringConfigApi.md#GetRoutingInstructions) | **Get** /routingInstructions | Get routing instructions
[**GetTaxBrackets**](CashieringConfigApi.md#GetTaxBrackets) | **Get** /taxBrackets | Operation to fetch TaxBrackets.
[**GetTaxTypes**](CashieringConfigApi.md#GetTaxTypes) | **Get** /hotelTaxTypes | Operation to fetch TaxTypes.
[**GetTemplateCustomNumberConfig**](CashieringConfigApi.md#GetTemplateCustomNumberConfig) | **Get** /hotels/{hotelId}/template/customNumbers/configuration/{configurationId} | Operation to fetch template custom number configuration.
[**GetTemplateCustomNumbers**](CashieringConfigApi.md#GetTemplateCustomNumbers) | **Get** /template/customNumbers | Operation to fetch template custom number configuration.
[**GetTemplateTransactionCodes**](CashieringConfigApi.md#GetTemplateTransactionCodes) | **Get** /templateTransactionCodes | Get template transaction codes
[**GetTemplateTransactionGroups**](CashieringConfigApi.md#GetTemplateTransactionGroups) | **Get** /templateTransactionGroups | Operation to fetch TemplateTransactionGroups.
[**GetTemplateTransactionSubgroups**](CashieringConfigApi.md#GetTemplateTransactionSubgroups) | **Get** /templateTransactionSubGroups | Operation to fetch TemplateTransactionSubgroups.
[**GetTransactionArrangementCodes**](CashieringConfigApi.md#GetTransactionArrangementCodes) | **Get** /transactionArrangementCodes | Operation to fetch TransactionArrangementCodes.
[**GetTransactionCode**](CashieringConfigApi.md#GetTransactionCode) | **Get** /hotels/{hotelId}/transactionCodes/{transactionCode}/hotelTransactionCode | Get transaction codes
[**GetTransactionCodeAccessRoles**](CashieringConfigApi.md#GetTransactionCodeAccessRoles) | **Get** /hotels/{hotelId}/transactionCodeAccessRoles | Operation to fetch TransactionCodeAccessRoles.
[**GetTransactionCodes**](CashieringConfigApi.md#GetTransactionCodes) | **Get** /transactionCodes | Operation to fetch TransactionCodes.
[**GetTransactionDiscounts**](CashieringConfigApi.md#GetTransactionDiscounts) | **Get** /transactionDiscounts | Operation to fetch TransactionDiscounts.
[**GetTransactionDiversionRules**](CashieringConfigApi.md#GetTransactionDiversionRules) | **Get** /transactionDiversionRules | Operation to fetch TransactionDiversionRules.
[**GetTransactionGroup**](CashieringConfigApi.md#GetTransactionGroup) | **Get** /hotels/{hotelId}/transactionGroupCode/{transactionGroupCode}/transactionGroup | Operation to fetch TransactionGroup.
[**GetTransactionGroups**](CashieringConfigApi.md#GetTransactionGroups) | **Get** /transactionGroups | Operation to fetch TransactionGroups.
[**GetTransactionSubgroup**](CashieringConfigApi.md#GetTransactionSubgroup) | **Get** /hotels/{hotelId}/transactionSubGroupCodes/{transactionSubGroupCode}/transactionGroupCodes/{transactionGroupCode}/transactionSubGroup | Operation to fetch TransactionGroup.
[**GetTransactionSubgroups**](CashieringConfigApi.md#GetTransactionSubgroups) | **Get** /transactionSubGroups | Operation to fetch TransactionSubgroups.
[**PostAdjustmentCodes**](CashieringConfigApi.md#PostAdjustmentCodes) | **Post** /hotelAdjustmentCodes | Operation to create AdjustmentCodes.
[**PostArticles**](CashieringConfigApi.md#PostArticles) | **Post** /articles | Operation to create Articles.
[**PostAuthorizationConfigRule**](CashieringConfigApi.md#PostAuthorizationConfigRule) | **Post** /authorizationConfigRule | Operation to create AuthorizationConfigRule.
[**PostAuthorizerGroups**](CashieringConfigApi.md#PostAuthorizerGroups) | **Post** /authorizerGroups | Operation to create AuthorizerGroups.
[**PostCashiers**](CashieringConfigApi.md#PostCashiers) | **Post** /cashiers | Operation to create Cashiers.
[**PostCollectingAgentTaxes**](CashieringConfigApi.md#PostCollectingAgentTaxes) | **Post** /collectingAgentTaxes | Operation to create CollectingAgentTaxes.
[**PostCompBucketRedemptionConfig**](CashieringConfigApi.md#PostCompBucketRedemptionConfig) | **Post** /hotels/{hotelId}/compBucket/redemption | Operation to create Comp Bucket Redemption Codes.
[**PostCompTypes**](CashieringConfigApi.md#PostCompTypes) | **Post** /compTypes | Operation to Create Comp Types
[**PostCurrencyExchangeServiceTaxes**](CashieringConfigApi.md#PostCurrencyExchangeServiceTaxes) | **Post** /currencyExchangeServiceTaxes | Operation to create CurrencyExchangeServiceTaxes.
[**PostCustomChargeExemptionsConfig**](CashieringConfigApi.md#PostCustomChargeExemptionsConfig) | **Post** /hotels/{hotelId}/customCharges/exemptions | Operation to create Custom Charge Exemptions Config.
[**PostCustomChargesConfig**](CashieringConfigApi.md#PostCustomChargesConfig) | **Post** /hotels/{hotelId}/customCharges | Operation to create Custom Charge Codes.
[**PostCustomNumberConfig**](CashieringConfigApi.md#PostCustomNumberConfig) | **Post** /hotels/{hotelId}/customNumbers | Operation to create custom number config.
[**PostExpenseArrangementCodes**](CashieringConfigApi.md#PostExpenseArrangementCodes) | **Post** /expenseArrangementCodes | Operation to create ExpenseArrangementCodes.
[**PostFiscalPartners**](CashieringConfigApi.md#PostFiscalPartners) | **Post** /hotels/{hotelId}/fiscalPartners | Create fiscal partners
[**PostFiscalPeriods**](CashieringConfigApi.md#PostFiscalPeriods) | **Post** /fiscalPeriods | Operation to create FiscalPeriods.
[**PostFiscalYears**](CashieringConfigApi.md#PostFiscalYears) | **Post** /fiscalYears | Operation to create FiscalYears.
[**PostFolioArrangementCodes**](CashieringConfigApi.md#PostFolioArrangementCodes) | **Post** /folioArrangementCodes | Operation to create FolioArrangementCodes.
[**PostFolioPrintQueues**](CashieringConfigApi.md#PostFolioPrintQueues) | **Post** /folioPrintQueues | Operation to create FolioPrintQueues.
[**PostFolioTypeLegendMappingConfig**](CashieringConfigApi.md#PostFolioTypeLegendMappingConfig) | **Post** /folioTypeLegendMappings | Operation to create folio type legend mappings config.
[**PostFolioTypesConfig**](CashieringConfigApi.md#PostFolioTypesConfig) | **Post** /folioTypesConfig | Operation to create FolioTypesConfig.
[**PostForeignCurrencies**](CashieringConfigApi.md#PostForeignCurrencies) | **Post** /foreignCurrencies | Operation to create ForeignCurrencies.
[**PostGroupArrangementCodes**](CashieringConfigApi.md#PostGroupArrangementCodes) | **Post** /groupArrangementCodes | Operation to create GroupArrangementCodes.
[**PostNoShowPostingRules**](CashieringConfigApi.md#PostNoShowPostingRules) | **Post** /noShowPostingRules | Operation to create NoShowPostingRules.
[**PostPackageArrangementCodes**](CashieringConfigApi.md#PostPackageArrangementCodes) | **Post** /packageArrangementCodes | Operation to create PackageArrangementCodes.
[**PostPaymentMethods**](CashieringConfigApi.md#PostPaymentMethods) | **Post** /hotelPaymentMethods | Operation to create PaymentMethods.
[**PostRevenueBucketCodes**](CashieringConfigApi.md#PostRevenueBucketCodes) | **Post** /revenueBucketCodes | Operation to create RevenueBucketCodes.
[**PostRevenueBucketTypes**](CashieringConfigApi.md#PostRevenueBucketTypes) | **Post** /revenueBucketTypes | Operation to create RevenueBucketTypes.
[**PostRevenueTypeMapping**](CashieringConfigApi.md#PostRevenueTypeMapping) | **Post** /revenueTypeMapping | Post revenue type mapping
[**PostRoutingInstructions**](CashieringConfigApi.md#PostRoutingInstructions) | **Post** /routingInstructions | Operation to create RoutingInstructions.
[**PostTaxBrackets**](CashieringConfigApi.md#PostTaxBrackets) | **Post** /taxBrackets | Operation to create TaxBrackets.
[**PostTaxTypes**](CashieringConfigApi.md#PostTaxTypes) | **Post** /hotelTaxTypes | Operation to create TaxTypes.
[**PostTemplateCustomNumber**](CashieringConfigApi.md#PostTemplateCustomNumber) | **Post** /template/customNumbers | Operation to create a new template custom number configuration.
[**PostTemplateCustomNumberConfig**](CashieringConfigApi.md#PostTemplateCustomNumberConfig) | **Post** /hotels/{hotelId}/template/customNumbers | Operation to create a new template custom number configuration.
[**PostTemplateTransactionCodes**](CashieringConfigApi.md#PostTemplateTransactionCodes) | **Post** /templateTransactionCodes | Post template transaction codes
[**PostTemplateTransactionGroups**](CashieringConfigApi.md#PostTemplateTransactionGroups) | **Post** /templateTransactionGroups | Operation to create TemplateTransactionGroups.
[**PostTemplateTransactionSubgroups**](CashieringConfigApi.md#PostTemplateTransactionSubgroups) | **Post** /templateTransactionSubGroups | Operation to create TemplateTransactionSubgroups.
[**PostTransactionCodes**](CashieringConfigApi.md#PostTransactionCodes) | **Post** /transactionCodes | Post transaction codes
[**PostTransactionDiscounts**](CashieringConfigApi.md#PostTransactionDiscounts) | **Post** /transactionDiscounts | Operation to create TransactionDiscounts.
[**PostTransactionDiversionRules**](CashieringConfigApi.md#PostTransactionDiversionRules) | **Post** /transactionDiversionRules | Operation to create TransactionDiversionRules.
[**PostTransactionGenerates**](CashieringConfigApi.md#PostTransactionGenerates) | **Post** /generates | Post transaction generates
[**PostTransactionGroups**](CashieringConfigApi.md#PostTransactionGroups) | **Post** /transactionGroups | Operation to create TransactionGroups.
[**PostTransactionSubgroups**](CashieringConfigApi.md#PostTransactionSubgroups) | **Post** /transactionSubGroups | Operation to create TransactionSubgroups.
[**PutAdjustmentCodes**](CashieringConfigApi.md#PutAdjustmentCodes) | **Put** /hotelAdjustmentCodes | Operation to change AdjustmentCodes.
[**PutArticles**](CashieringConfigApi.md#PutArticles) | **Put** /articles | Operation to change Articles.
[**PutAuthorizationConfigRule**](CashieringConfigApi.md#PutAuthorizationConfigRule) | **Put** /authorizationConfigRule | Operation to change AuthorizationConfigRule.
[**PutAuthorizerGroups**](CashieringConfigApi.md#PutAuthorizerGroups) | **Put** /authorizerGroups | Operation to change AuthorizerGroups.
[**PutCashiers**](CashieringConfigApi.md#PutCashiers) | **Put** /cashiers | Operation to change CashiersDetails.
[**PutCollectingAgentTaxes**](CashieringConfigApi.md#PutCollectingAgentTaxes) | **Put** /collectingAgentTaxes | Operation to change CollectingAgentTaxes.
[**PutCompBucketRedemptionConfig**](CashieringConfigApi.md#PutCompBucketRedemptionConfig) | **Put** /hotels/{hotelId}/compBucket/redemption/{redemptionCode} | Operation to change Comp Bucket Redemption Codes.
[**PutCurrencyExchangeServiceTaxes**](CashieringConfigApi.md#PutCurrencyExchangeServiceTaxes) | **Put** /currencyExchangeServiceTaxes | Operation to change ExchangeServiceTaxes.
[**PutCustomChargeExemptionsConfig**](CashieringConfigApi.md#PutCustomChargeExemptionsConfig) | **Put** /hotels/{hotelId}/customCharges/exemptions/{configurationId} | Operation to change Custom Charge Exemptions Config.
[**PutCustomChargesConfig**](CashieringConfigApi.md#PutCustomChargesConfig) | **Put** /hotels/{hotelId}/customCharges/configuration/{configurationId} | Operation to change Custom Charge Codes.
[**PutCustomNumberConfig**](CashieringConfigApi.md#PutCustomNumberConfig) | **Put** /hotels/{hotelId}/customNumbers/configuration/{configurationId} | Operation to change custom number config.
[**PutDailyPlanCodes**](CashieringConfigApi.md#PutDailyPlanCodes) | **Put** /dailyPlanCodes | Operation to change DailyPlanCodes.
[**PutExpenseArrangementCodes**](CashieringConfigApi.md#PutExpenseArrangementCodes) | **Put** /expenseArrangementCodes | Operation to change ExpenseArrangementCodes.
[**PutFiscalFolioParameters**](CashieringConfigApi.md#PutFiscalFolioParameters) | **Put** /fiscalFolioParameters | Operation to change FiscalFolioParameters.
[**PutFiscalPeriods**](CashieringConfigApi.md#PutFiscalPeriods) | **Put** /fiscalPeriods | Operation to change FiscalPeriods.
[**PutFiscalYears**](CashieringConfigApi.md#PutFiscalYears) | **Put** /fiscalYears | Operation to change FiscalYears.
[**PutFolioArrangementCodes**](CashieringConfigApi.md#PutFolioArrangementCodes) | **Put** /folioArrangementCodes | Operation to change FolioArrangementCodes.
[**PutFolioCopyLegends**](CashieringConfigApi.md#PutFolioCopyLegends) | **Put** /folioCopyLegends | Operation to change FolioCopyLegends.
[**PutFolioPrintQueues**](CashieringConfigApi.md#PutFolioPrintQueues) | **Put** /folioPrintQueues | Operation to change FolioPrintQueues.
[**PutFolioTypesConfig**](CashieringConfigApi.md#PutFolioTypesConfig) | **Put** /folioTypesConfig | Operation to change FolioTypesConfig.
[**PutForeignCurrencies**](CashieringConfigApi.md#PutForeignCurrencies) | **Put** /foreignCurrencies | Operation to change ForeignCurrencies.
[**PutGUINumberRules**](CashieringConfigApi.md#PutGUINumberRules) | **Put** /guiNumberRules | Operation to change GUINumberRules.
[**PutGroupArrangementCodes**](CashieringConfigApi.md#PutGroupArrangementCodes) | **Put** /groupArrangementCodes | Operation to change GroupArrangementCodes.
[**PutNoShowPostingRules**](CashieringConfigApi.md#PutNoShowPostingRules) | **Put** /noShowPostingRules | Operation to change NoShowPostingRules.
[**PutNumberDescriptions**](CashieringConfigApi.md#PutNumberDescriptions) | **Put** /numberDescriptions | Operation to change NumberDescriptions.
[**PutOperaControlSequences**](CashieringConfigApi.md#PutOperaControlSequences) | **Put** /operaControlSequences | Operation to change OperaControlSequences.
[**PutPackageArrangementCodes**](CashieringConfigApi.md#PutPackageArrangementCodes) | **Put** /packageArrangementCodes | Operation to change PackageArrangementCodes.
[**PutPaymentMethods**](CashieringConfigApi.md#PutPaymentMethods) | **Put** /hotelPaymentMethods | Operation to change PaymentMethods.
[**PutRevenueBucketCodes**](CashieringConfigApi.md#PutRevenueBucketCodes) | **Put** /revenueBucketCodes | Operation to change RevenueBucketCodes.
[**PutRevenueBucketTypes**](CashieringConfigApi.md#PutRevenueBucketTypes) | **Put** /revenueBucketTypes | Operation to change RevenueBucketTypes.
[**PutRevenueTypeMapping**](CashieringConfigApi.md#PutRevenueTypeMapping) | **Put** /revenueTypeMapping | Operation to change RevenueTypeMapping.
[**PutRoutingInstructions**](CashieringConfigApi.md#PutRoutingInstructions) | **Put** /routingInstructions | Operation to change RoutingInstructions.
[**PutTaxBrackets**](CashieringConfigApi.md#PutTaxBrackets) | **Put** /taxBrackets | Operation to change TaxBrackets.
[**PutTaxTypes**](CashieringConfigApi.md#PutTaxTypes) | **Put** /hotelTaxTypes | Operation to change TaxTypes.
[**PutTemplateCustomNumber**](CashieringConfigApi.md#PutTemplateCustomNumber) | **Put** /template/customNumbers | Operation to change template custom number configuration.
[**PutTemplateCustomNumberConfig**](CashieringConfigApi.md#PutTemplateCustomNumberConfig) | **Put** /hotels/{hotelId}/template/customNumbers/configuration/{configurationId} | Operation to change template custom number configuration.
[**PutTemplateTransactionCodes**](CashieringConfigApi.md#PutTemplateTransactionCodes) | **Put** /templateTransactionCodes | Operation to change TemplateTransactionCodes.
[**PutTemplateTransactionGroups**](CashieringConfigApi.md#PutTemplateTransactionGroups) | **Put** /templateTransactionGroups | Operation to change TemplateTransactionGroups.
[**PutTemplateTransactionSubgroups**](CashieringConfigApi.md#PutTemplateTransactionSubgroups) | **Put** /templateTransactionSubGroups | Operation to change TemplateTransactionSubgroups.
[**PutTransactionCodeOwnership**](CashieringConfigApi.md#PutTransactionCodeOwnership) | **Put** /transactionCodeOwnership | Operation to change TransactionCodeOwnership.
[**PutTransactionCodes**](CashieringConfigApi.md#PutTransactionCodes) | **Put** /transactionCodes | Put transaction codes
[**PutTransactionDiscounts**](CashieringConfigApi.md#PutTransactionDiscounts) | **Put** /hotels/{hotelId}/transactionDiscounts/{transactionDiscountCode} | Operation to change TransactionDiscounts.
[**PutTransactionDiversionRules**](CashieringConfigApi.md#PutTransactionDiversionRules) | **Put** /transactionDiversionRules | Operation to change TransactionDiversionRules.
[**PutTransactionGenerates**](CashieringConfigApi.md#PutTransactionGenerates) | **Put** /generates | Put transaction generates
[**PutTransactionGroups**](CashieringConfigApi.md#PutTransactionGroups) | **Put** /transactionGroups | Operation to change TransactionGroups.
[**PutTransactionSubgroups**](CashieringConfigApi.md#PutTransactionSubgroups) | **Put** /transactionSubGroups | Operation to change TransactionSubgroups.
[**RemoveCompTypes**](CashieringConfigApi.md#RemoveCompTypes) | **Delete** /compTypes/codes/{compTypesCode} | Operation to Remove Comp Types.
[**RemoveFiscalPartners**](CashieringConfigApi.md#RemoveFiscalPartners) | **Delete** /hotels/{hotelId}/fiscalPartners | Delete configuration fiscal partners
[**RemoveFolioTypeLegendMappingConfig**](CashieringConfigApi.md#RemoveFolioTypeLegendMappingConfig) | **Delete** /hotels/{hotelId}/folios/{folioType}/legends/{legendCode} | Operation to remove folio type legend mappings config.
[**RemovePaymentMethods**](CashieringConfigApi.md#RemovePaymentMethods) | **Put** /paymentMethods | Operation to delete TransactionArrangementCodes.
[**RemoveTransactionDiversionRules**](CashieringConfigApi.md#RemoveTransactionDiversionRules) | **Put** /transactionDiversionRules/remove | Operation to delete TransactionDiversionRules.
[**RemoveTransactionGenerates**](CashieringConfigApi.md#RemoveTransactionGenerates) | **Put** /transactionGenerates | Operation to delete TransactionGenerates.
[**SetBudgetForecast**](CashieringConfigApi.md#SetBudgetForecast) | **Put** /budgetForecast/set | Operation to set BudgetForecast.
[**SetCompAuthorizer**](CashieringConfigApi.md#SetCompAuthorizer) | **Put** /compAuthorizers/set | Operation to set CompAuthorizer.
[**SetExchangeRates**](CashieringConfigApi.md#SetExchangeRates) | **Put** /exchangeRates/set | Operation to set ExchangeRates.
[**SetGlobalExchangeRates**](CashieringConfigApi.md#SetGlobalExchangeRates) | **Put** /globalExchangeRates/set | Operation to set GlobalExchangeRates.
[**SetTransactionCodeAccessRoles**](CashieringConfigApi.md#SetTransactionCodeAccessRoles) | **Put** /transactionCodeAccessRoles/set | Operation to set TransactionCodeAccessRoles.



## CalculatePosting

> CalculatedPosting CalculatePosting(ctx, transactionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PostingAmount(postingAmount).TaxType(taxType).GuestBalance(guestBalance).RoomType(roomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to CalculatePosting.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    transactionCode := "transactionCode_example" // string | Transaction Code in OPERA
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    postingAmount := float32(299) // float32 | Base amount to test for posting. (optional)
    taxType := "taxType_example" // string | Specify this criteria if calculation is based on the tax type. (optional)
    guestBalance := float32(299) // float32 | Specify this criteria if calculation is based on the guest balance. (optional)
    roomType := "STD" // string | Specify this criteria if calculation is based on room type. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.CalculatePosting(context.Background(), transactionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PostingAmount(postingAmount).TaxType(taxType).GuestBalance(guestBalance).RoomType(roomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.CalculatePosting``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CalculatePosting`: CalculatedPosting
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.CalculatePosting`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionCode** | **string** | Transaction Code in OPERA | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiCalculatePostingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **postingAmount** | **float32** | Base amount to test for posting. | 
 **taxType** | **string** | Specify this criteria if calculation is based on the tax type. | 
 **guestBalance** | **float32** | Specify this criteria if calculation is based on the guest balance. | 
 **roomType** | **string** | Specify this criteria if calculation is based on room type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CalculatedPosting**](CalculatedPosting.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeCompTypes

> CompTypesStatus ChangeCompTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompTypesToBeChanged(compTypesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to Change Comp Types.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    compTypesToBeChanged := *openapiclient.NewChangeCompTypesRequest() // ChangeCompTypesRequest | Request object for changing Comp Types.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.ChangeCompTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompTypesToBeChanged(compTypesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.ChangeCompTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeCompTypes`: CompTypesStatus
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.ChangeCompTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiChangeCompTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **compTypesToBeChanged** | [**ChangeCompTypesRequest**](ChangeCompTypesRequest.md) | Request object for changing Comp Types. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CompTypesStatus**](CompTypesStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeFiscalCommands

> Status ChangeFiscalCommands(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeFiscalCommands(changeFiscalCommands).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change configuration fiscal commands



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeFiscalCommands := *openapiclient.NewChangeFiscalCommandsRequest() // ChangeFiscalCommandsRequest | Request to update existing Fiscal Command.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.ChangeFiscalCommands(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeFiscalCommands(changeFiscalCommands).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.ChangeFiscalCommands``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeFiscalCommands`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.ChangeFiscalCommands`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeFiscalCommandsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeFiscalCommands** | [**ChangeFiscalCommandsRequest**](ChangeFiscalCommandsRequest.md) | Request to update existing Fiscal Command. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeFiscalPartners

> Status ChangeFiscalPartners(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeFiscalPartners(changeFiscalPartners).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change configuration fiscal partners



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeFiscalPartners := *openapiclient.NewChangeFiscalPartnersRequest() // ChangeFiscalPartnersRequest | Request object to change Fiscal Partners.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.ChangeFiscalPartners(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeFiscalPartners(changeFiscalPartners).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.ChangeFiscalPartners``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeFiscalPartners`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.ChangeFiscalPartners`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeFiscalPartnersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeFiscalPartners** | [**ChangeFiscalPartnersRequest**](ChangeFiscalPartnersRequest.md) | Request object to change Fiscal Partners. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeFolioTypeLegendMappingConfig

> FolioTypeLegendMappingConfigStatus ChangeFolioTypeLegendMappingConfig(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioTypeLegendMappingConfigToBeChanged(folioTypeLegendMappingConfigToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change folio type legend mappings config.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioTypeLegendMappingConfigToBeChanged := *openapiclient.NewChangeFolioTypeLegendMappingConfigRequest() // ChangeFolioTypeLegendMappingConfigRequest | Request object to edit folio type legend mapping information.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.ChangeFolioTypeLegendMappingConfig(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioTypeLegendMappingConfigToBeChanged(folioTypeLegendMappingConfigToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.ChangeFolioTypeLegendMappingConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeFolioTypeLegendMappingConfig`: FolioTypeLegendMappingConfigStatus
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.ChangeFolioTypeLegendMappingConfig`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiChangeFolioTypeLegendMappingConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioTypeLegendMappingConfigToBeChanged** | [**ChangeFolioTypeLegendMappingConfigRequest**](ChangeFolioTypeLegendMappingConfigRequest.md) | Request object to edit folio type legend mapping information. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FolioTypeLegendMappingConfigStatus**](FolioTypeLegendMappingConfigStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyAdjustmentCodes

> Status CopyAdjustmentCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdjustmentCodesCopy(adjustmentCodesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to copy AdjustmentCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    adjustmentCodesCopy := *openapiclient.NewCopyAdjustmentCodesRequest() // CopyAdjustmentCodesRequest | List of the Adjustment Codes to be copied.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.CopyAdjustmentCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdjustmentCodesCopy(adjustmentCodesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.CopyAdjustmentCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyAdjustmentCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.CopyAdjustmentCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCopyAdjustmentCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **adjustmentCodesCopy** | [**CopyAdjustmentCodesRequest**](CopyAdjustmentCodesRequest.md) | List of the Adjustment Codes to be copied. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyCustomChargeExemptionsConfig

> Status CopyCustomChargeExemptionsConfig(ctx, sourceHotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CustomChargeExemptionsConfigCopy(customChargeExemptionsConfigCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to copy Custom Charge Exemptions Config.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    sourceHotelId := "sourceHotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    customChargeExemptionsConfigCopy := *openapiclient.NewCopyCustomChargeExemptionsConfigRequest() // CopyCustomChargeExemptionsConfigRequest | List of the Custom Charge Exemptions to be copied.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.CopyCustomChargeExemptionsConfig(context.Background(), sourceHotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CustomChargeExemptionsConfigCopy(customChargeExemptionsConfigCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.CopyCustomChargeExemptionsConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyCustomChargeExemptionsConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.CopyCustomChargeExemptionsConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceHotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyCustomChargeExemptionsConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **customChargeExemptionsConfigCopy** | [**CopyCustomChargeExemptionsConfigRequest**](CopyCustomChargeExemptionsConfigRequest.md) | List of the Custom Charge Exemptions to be copied. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyExpenseArrangementCodes

> Status CopyExpenseArrangementCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExpenseArrangementCodesCopy(expenseArrangementCodesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to copy ExpenseArrangementCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    expenseArrangementCodesCopy := *openapiclient.NewCopyExpenseArrangementCodesRequest() // CopyExpenseArrangementCodesRequest | List of the expense arrangement codes to be copied.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.CopyExpenseArrangementCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExpenseArrangementCodesCopy(expenseArrangementCodesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.CopyExpenseArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyExpenseArrangementCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.CopyExpenseArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCopyExpenseArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **expenseArrangementCodesCopy** | [**CopyExpenseArrangementCodesRequest**](CopyExpenseArrangementCodesRequest.md) | List of the expense arrangement codes to be copied. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyFiscalFolioParameters

> Status CopyFiscalFolioParameters(ctx, sourceHotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FiscalFolioParametersCopy(fiscalFolioParametersCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to copy FiscalFolioParameters.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    sourceHotelId := "sourceHotelId_example" // string | Unique ID of the source hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fiscalFolioParametersCopy := *openapiclient.NewCopyFiscalFolioParametersRequest() // CopyFiscalFolioParametersRequest | Request object for copying Fiscal Folio Parameters to other hotel code(s).
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.CopyFiscalFolioParameters(context.Background(), sourceHotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FiscalFolioParametersCopy(fiscalFolioParametersCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.CopyFiscalFolioParameters``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyFiscalFolioParameters`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.CopyFiscalFolioParameters`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceHotelId** | **string** | Unique ID of the source hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyFiscalFolioParametersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fiscalFolioParametersCopy** | [**CopyFiscalFolioParametersRequest**](CopyFiscalFolioParametersRequest.md) | Request object for copying Fiscal Folio Parameters to other hotel code(s). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyFolioArrangementCodes

> Status CopyFolioArrangementCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioArrangementCodesCopy(folioArrangementCodesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to copy FolioArrangementCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioArrangementCodesCopy := *openapiclient.NewCopyFolioArrangementCodesRequest() // CopyFolioArrangementCodesRequest | List of folio arrangement codes to be copied.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.CopyFolioArrangementCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioArrangementCodesCopy(folioArrangementCodesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.CopyFolioArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyFolioArrangementCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.CopyFolioArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCopyFolioArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioArrangementCodesCopy** | [**CopyFolioArrangementCodesRequest**](CopyFolioArrangementCodesRequest.md) | List of folio arrangement codes to be copied. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyGroupArrangementCodes

> Status CopyGroupArrangementCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GroupArrangementCodesCopy(groupArrangementCodesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to copy GroupArrangementCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    groupArrangementCodesCopy := *openapiclient.NewCopyGroupArrangementCodesRequest() // CopyGroupArrangementCodesRequest | List of the group arrangement codes to be copied.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.CopyGroupArrangementCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GroupArrangementCodesCopy(groupArrangementCodesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.CopyGroupArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyGroupArrangementCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.CopyGroupArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCopyGroupArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **groupArrangementCodesCopy** | [**CopyGroupArrangementCodesRequest**](CopyGroupArrangementCodesRequest.md) | List of the group arrangement codes to be copied. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyPackageArrangementCodes

> Status CopyPackageArrangementCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageArrangementCodesCopy(packageArrangementCodesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to copy PackageArrangementCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    packageArrangementCodesCopy := *openapiclient.NewCopyPackageArrangementCodesRequest() // CopyPackageArrangementCodesRequest | List of the package arrangement codes to be copied.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.CopyPackageArrangementCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageArrangementCodesCopy(packageArrangementCodesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.CopyPackageArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyPackageArrangementCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.CopyPackageArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCopyPackageArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **packageArrangementCodesCopy** | [**CopyPackageArrangementCodesRequest**](CopyPackageArrangementCodesRequest.md) | List of the package arrangement codes to be copied. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyPaymentMethods

> Status CopyPaymentMethods(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PaymentMethodsCopy(paymentMethodsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to copy PaymentMethods.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    paymentMethodsCopy := *openapiclient.NewCopyPaymentMethodsRequest() // CopyPaymentMethodsRequest | List of payment methods to be copied.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.CopyPaymentMethods(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PaymentMethodsCopy(paymentMethodsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.CopyPaymentMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyPaymentMethods`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.CopyPaymentMethods`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCopyPaymentMethodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **paymentMethodsCopy** | [**CopyPaymentMethodsRequest**](CopyPaymentMethodsRequest.md) | List of payment methods to be copied. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyRevenueBucketCodes

> Status CopyRevenueBucketCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueBucketCodesCopy(revenueBucketCodesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to copy RevenueBucketCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    revenueBucketCodesCopy := *openapiclient.NewCopyRevenueBucketCodesRequest() // CopyRevenueBucketCodesRequest | Request object for copying one or more Revenue Bucket Codes configurations from one source property to one or more target properties.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.CopyRevenueBucketCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueBucketCodesCopy(revenueBucketCodesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.CopyRevenueBucketCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyRevenueBucketCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.CopyRevenueBucketCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCopyRevenueBucketCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **revenueBucketCodesCopy** | [**CopyRevenueBucketCodesRequest**](CopyRevenueBucketCodesRequest.md) | Request object for copying one or more Revenue Bucket Codes configurations from one source property to one or more target properties. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyRevenueBucketTypes

> Status CopyRevenueBucketTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueBucketTypesCopy(revenueBucketTypesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to copy RevenueBucketTypes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    revenueBucketTypesCopy := *openapiclient.NewCopyRevenueBucketTypesRequest() // CopyRevenueBucketTypesRequest | List of the Revenue Bucket Types to be copied.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.CopyRevenueBucketTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueBucketTypesCopy(revenueBucketTypesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.CopyRevenueBucketTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyRevenueBucketTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.CopyRevenueBucketTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCopyRevenueBucketTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **revenueBucketTypesCopy** | [**CopyRevenueBucketTypesRequest**](CopyRevenueBucketTypesRequest.md) | List of the Revenue Bucket Types to be copied. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyRevenueTypeMapping

> Status CopyRevenueTypeMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueTypeMappingCopy(revenueTypeMappingCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to copy RevenueTypeMapping.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    revenueTypeMappingCopy := *openapiclient.NewCopyRevenueTypeMappingRequest() // CopyRevenueTypeMappingRequest | Request object for Copying Revenue Type Mapping.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.CopyRevenueTypeMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueTypeMappingCopy(revenueTypeMappingCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.CopyRevenueTypeMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyRevenueTypeMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.CopyRevenueTypeMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCopyRevenueTypeMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **revenueTypeMappingCopy** | [**CopyRevenueTypeMappingRequest**](CopyRevenueTypeMappingRequest.md) | Request object for Copying Revenue Type Mapping. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyRoutingInstructions

> Status CopyRoutingInstructions(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoutingInstructionsCopy(routingInstructionsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to copy RoutingInstructions.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    routingInstructionsCopy := *openapiclient.NewCopyRoutingInstructionsRequest() // CopyRoutingInstructionsRequest | List of the routing instructions to be copied to hotel code(s).
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.CopyRoutingInstructions(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoutingInstructionsCopy(routingInstructionsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.CopyRoutingInstructions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyRoutingInstructions`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.CopyRoutingInstructions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCopyRoutingInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **routingInstructionsCopy** | [**CopyRoutingInstructionsRequest**](CopyRoutingInstructionsRequest.md) | List of the routing instructions to be copied to hotel code(s). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyTaxBrackets

> Status CopyTaxBrackets(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxBracketsCopy(taxBracketsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to copy TaxBrackets.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taxBracketsCopy := *openapiclient.NewCopyTaxBracketsRequest() // CopyTaxBracketsRequest | Request object for copying tax brackets.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.CopyTaxBrackets(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxBracketsCopy(taxBracketsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.CopyTaxBrackets``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyTaxBrackets`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.CopyTaxBrackets`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCopyTaxBracketsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taxBracketsCopy** | [**CopyTaxBracketsRequest**](CopyTaxBracketsRequest.md) | Request object for copying tax brackets. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyTaxTypes

> Status CopyTaxTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxTypesCopy(taxTypesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to copy TaxTypes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taxTypesCopy := *openapiclient.NewCopyTaxTypesRequest() // CopyTaxTypesRequest | List of the Tax Types to be copied.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.CopyTaxTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxTypesCopy(taxTypesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.CopyTaxTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyTaxTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.CopyTaxTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCopyTaxTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taxTypesCopy** | [**CopyTaxTypesRequest**](CopyTaxTypesRequest.md) | List of the Tax Types to be copied. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyTransactionCodes

> Status CopyTransactionCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionCodesCopy(transactionCodesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to copy TransactionCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionCodesCopy := *openapiclient.NewCopyTransactionCodesRequest() // CopyTransactionCodesRequest | Request object for copying transaction codes in the configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.CopyTransactionCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionCodesCopy(transactionCodesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.CopyTransactionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyTransactionCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.CopyTransactionCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCopyTransactionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionCodesCopy** | [**CopyTransactionCodesRequest**](CopyTransactionCodesRequest.md) | Request object for copying transaction codes in the configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyTransactionGroups

> Status CopyTransactionGroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroupsCopy(transactionGroupsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to copy TransactionGroups.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionGroupsCopy := *openapiclient.NewCopyTransactionGroupsRequest() // CopyTransactionGroupsRequest | List of the transaction groups to be copied.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.CopyTransactionGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroupsCopy(transactionGroupsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.CopyTransactionGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyTransactionGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.CopyTransactionGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCopyTransactionGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionGroupsCopy** | [**CopyTransactionGroupsRequest**](CopyTransactionGroupsRequest.md) | List of the transaction groups to be copied. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyTransactionSubgroups

> Status CopyTransactionSubgroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionSubgroupsCopy(transactionSubgroupsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to copy TransactionSubgroups.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionSubgroupsCopy := *openapiclient.NewCopyTransactionSubgroupsRequest() // CopyTransactionSubgroupsRequest | Request object to copy transaction subgroups to the properties specified.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.CopyTransactionSubgroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionSubgroupsCopy(transactionSubgroupsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.CopyTransactionSubgroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyTransactionSubgroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.CopyTransactionSubgroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCopyTransactionSubgroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionSubgroupsCopy** | [**CopyTransactionSubgroupsRequest**](CopyTransactionSubgroupsRequest.md) | Request object to copy transaction subgroups to the properties specified. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteAdjustmentCodes

> Status DeleteAdjustmentCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdjustmentCode(adjustmentCode).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete AdjustmentCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    adjustmentCode := "adjustmentCode_example" // string | Configuration code. (optional)
    hotelId := "hotelId_example" // string | Hotel where the code is configured. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteAdjustmentCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdjustmentCode(adjustmentCode).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteAdjustmentCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAdjustmentCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteAdjustmentCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAdjustmentCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **adjustmentCode** | **string** | Configuration code. | 
 **hotelId** | **string** | Hotel where the code is configured. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteArticles

> Status DeleteArticles(ctx).HotelId(hotelId).ArticleCodes(articleCodes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArticleHotelId(articleHotelId).Inactive(inactive).OrderSequence(orderSequence).Description(description).TransactionCode(transactionCode).Amount(amount).CurrencyCode(currencyCode).AvailableForPostIt(availableForPostIt).Color(color).UniversalProductCode(universalProductCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete Articles.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
    articleCodes := []string{"Inner_example"} // []string | Unique code of the article.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    articleHotelId := []string{"Inner_example"} // []string | Hotel code to which the article belongs. (optional)
    inactive := []bool{false} // []bool | Indicates whether the article is inactive or not. (optional)
    orderSequence := []float32{float32(123)} // []float32 | Display Order sequence. (optional)
    description := []string{"Inner_example"} // []string | Description of the article. (optional)
    transactionCode := []string{"Inner_example"} // []string | Transaction code to which the article belongs. (optional)
    amount := float32(8.14) // float32 | A monetary amount. (optional)
    currencyCode := "currencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    availableForPostIt := true // bool | Indicates whether the article is available for post it. (optional)
    color := "color_example" // string | Color configuration type. This color configuration provides a visual category of entities. (optional)
    universalProductCode := []string{"Inner_example"} // []string | Unique Universal product code of the article. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteArticles(context.Background()).HotelId(hotelId).ArticleCodes(articleCodes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArticleHotelId(articleHotelId).Inactive(inactive).OrderSequence(orderSequence).Description(description).TransactionCode(transactionCode).Amount(amount).CurrencyCode(currencyCode).AvailableForPostIt(availableForPostIt).Color(color).UniversalProductCode(universalProductCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteArticles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteArticles`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteArticles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteArticlesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **articleCodes** | **[]string** | Unique code of the article. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **articleHotelId** | **[]string** | Hotel code to which the article belongs. | 
 **inactive** | **[]bool** | Indicates whether the article is inactive or not. | 
 **orderSequence** | **[]float32** | Display Order sequence. | 
 **description** | **[]string** | Description of the article. | 
 **transactionCode** | **[]string** | Transaction code to which the article belongs. | 
 **amount** | **float32** | A monetary amount. | 
 **currencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **availableForPostIt** | **bool** | Indicates whether the article is available for post it. | 
 **color** | **string** | Color configuration type. This color configuration provides a visual category of entities. | 
 **universalProductCode** | **[]string** | Unique Universal product code of the article. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteAuthorizationConfigRule

> Status DeleteAuthorizationConfigRule(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomType(roomType).RoomClassHotelId(roomClassHotelId).RoomClassCode(roomClassCode).SourceCodeHotelId(sourceCodeHotelId).SourceCode(sourceCode).RateCategory(rateCategory).RateCode(rateCode).GuaranteeCode(guaranteeCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete AuthorizationConfigRule.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := []string{"Inner_example"} // []string | Property associated with authorization rule
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomType := []string{"Inner_example"} // []string | Authorization rule Room type. (optional)
    roomClassHotelId := "roomClassHotelId_example" // string |  (optional)
    roomClassCode := "roomClassCode_example" // string |  (optional)
    sourceCodeHotelId := "sourceCodeHotelId_example" // string |  (optional)
    sourceCode := "sourceCode_example" // string |  (optional)
    rateCategory := "rateCategory_example" // string | Rate category Code. (optional)
    rateCode := []string{"Inner_example"} // []string | Rate code associated to this rule. (optional)
    guaranteeCode := []string{"Inner_example"} // []string | Guarantee code associated to this rule. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteAuthorizationConfigRule(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomType(roomType).RoomClassHotelId(roomClassHotelId).RoomClassCode(roomClassCode).SourceCodeHotelId(sourceCodeHotelId).SourceCode(sourceCode).RateCategory(rateCategory).RateCode(rateCode).GuaranteeCode(guaranteeCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteAuthorizationConfigRule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAuthorizationConfigRule`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteAuthorizationConfigRule`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAuthorizationConfigRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **[]string** | Property associated with authorization rule | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomType** | **[]string** | Authorization rule Room type. | 
 **roomClassHotelId** | **string** |  | 
 **roomClassCode** | **string** |  | 
 **sourceCodeHotelId** | **string** |  | 
 **sourceCode** | **string** |  | 
 **rateCategory** | **string** | Rate category Code. | 
 **rateCode** | **[]string** | Rate code associated to this rule. | 
 **guaranteeCode** | **[]string** | Guarantee code associated to this rule. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteAuthorizerGroups

> Status DeleteAuthorizerGroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizerGroup(authorizerGroup).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete AuthorizerGroups.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    authorizerGroup := "authorizerGroup_example" // string | Configuration code. (optional)
    hotelId := "hotelId_example" // string | Hotel where the code is configured. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteAuthorizerGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizerGroup(authorizerGroup).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteAuthorizerGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAuthorizerGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteAuthorizerGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAuthorizerGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **authorizerGroup** | **string** | Configuration code. | 
 **hotelId** | **string** | Hotel where the code is configured. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteBudgetForecast

> Status DeleteBudgetForecast(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BudgetForecastToDelete(budgetForecastToDelete).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete BudgetForecast.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    budgetForecastToDelete := *openapiclient.NewDeleteBudgetForecastRequest() // DeleteBudgetForecastRequest | Request to load the Budget or Forecast information.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteBudgetForecast(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BudgetForecastToDelete(budgetForecastToDelete).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteBudgetForecast``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBudgetForecast`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteBudgetForecast`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBudgetForecastRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **budgetForecastToDelete** | [**DeleteBudgetForecastRequest**](DeleteBudgetForecastRequest.md) | Request to load the Budget or Forecast information. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteCollectingAgentTaxes

> Status DeleteCollectingAgentTaxes(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxCode(taxCode).TaxTypeCodes(taxTypeCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete CollectingAgentTaxes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := []string{"Inner_example"} // []string | It represents Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taxCode := []int32{int32(123)} // []int32 | Primary Key Sequence. (optional)
    taxTypeCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteCollectingAgentTaxes(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxCode(taxCode).TaxTypeCodes(taxTypeCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteCollectingAgentTaxes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCollectingAgentTaxes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteCollectingAgentTaxes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCollectingAgentTaxesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **[]string** | It represents Hotel code | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taxCode** | **[]int32** | Primary Key Sequence. | 
 **taxTypeCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteCompBucketRedemptionConfig

> Status DeleteCompBucketRedemptionConfig(ctx, redemptionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove Comp Bucket Redemption Codes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    redemptionCode := "redemptionCode_example" // string | Bucket Redemption Code
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteCompBucketRedemptionConfig(context.Background(), redemptionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteCompBucketRedemptionConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCompBucketRedemptionConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteCompBucketRedemptionConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**redemptionCode** | **string** | Bucket Redemption Code | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCompBucketRedemptionConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteCurrencyExchangeServiceTaxes

> Status DeleteCurrencyExchangeServiceTaxes(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CurrencyExchangeServiceTaxCode(currencyExchangeServiceTaxCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete CurrencyExchangeServiceTaxes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := []string{"Inner_example"} // []string | Property associated with currency exchange service tax
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    currencyExchangeServiceTaxCode := []string{"Inner_example"} // []string | Currency exchange service tax code (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteCurrencyExchangeServiceTaxes(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CurrencyExchangeServiceTaxCode(currencyExchangeServiceTaxCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteCurrencyExchangeServiceTaxes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCurrencyExchangeServiceTaxes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteCurrencyExchangeServiceTaxes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCurrencyExchangeServiceTaxesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **[]string** | Property associated with currency exchange service tax | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **currencyExchangeServiceTaxCode** | **[]string** | Currency exchange service tax code | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteCustomChargeExemptionsConfig

> Status DeleteCustomChargeExemptionsConfig(ctx, configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove Custom Charge Exemptions Config.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    configurationId := "configurationId_example" // string | Unique ID of the configuration
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteCustomChargeExemptionsConfig(context.Background(), configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteCustomChargeExemptionsConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCustomChargeExemptionsConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteCustomChargeExemptionsConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**configurationId** | **string** | Unique ID of the configuration | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCustomChargeExemptionsConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteCustomChargesConfig

> Status DeleteCustomChargesConfig(ctx, configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove Custom Charge Codes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    configurationId := "configurationId_example" // string | Unique ID of the configuration
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteCustomChargesConfig(context.Background(), configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteCustomChargesConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCustomChargesConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteCustomChargesConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**configurationId** | **string** | Unique ID of the configuration | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCustomChargesConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteCustomNumberConfig

> Status DeleteCustomNumberConfig(ctx, configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove custom number config.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    configurationId := "configurationId_example" // string | Unique ID of the configuration
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteCustomNumberConfig(context.Background(), configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteCustomNumberConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCustomNumberConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteCustomNumberConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**configurationId** | **string** | Unique ID of the configuration | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCustomNumberConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteExchangeRates

> Status DeleteExchangeRates(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExchangeRates(exchangeRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete ExchangeRates.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    exchangeRates := *openapiclient.NewDeleteExchangeRatesRequest() // DeleteExchangeRatesRequest | Exchange Rates to be Set.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteExchangeRates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExchangeRates(exchangeRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteExchangeRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteExchangeRates`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteExchangeRates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteExchangeRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **exchangeRates** | [**DeleteExchangeRatesRequest**](DeleteExchangeRatesRequest.md) | Exchange Rates to be Set. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteExpenseArrangementCodes

> Status DeleteExpenseArrangementCodes(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete ExpenseArrangementCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := []string{"Inner_example"} // []string | Hotel where the code is configured.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    code := []string{"Inner_example"} // []string | Configuration code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteExpenseArrangementCodes(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteExpenseArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteExpenseArrangementCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteExpenseArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteExpenseArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **[]string** | Hotel where the code is configured. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **code** | **[]string** | Configuration code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteFiscalFolioParameters

> Status DeleteFiscalFolioParameters(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Partner(partner).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete FiscalFolioParameters.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := []string{"Inner_example"} // []string | Code of the Hotel. (optional)
    partner := []string{"Inner_example"} // []string | Fiscal folio parameter associated with Partner. (optional)
    code := []string{"Inner_example"} // []string | Code of the Fiscal Folio Parameter. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteFiscalFolioParameters(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Partner(partner).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteFiscalFolioParameters``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteFiscalFolioParameters`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteFiscalFolioParameters`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteFiscalFolioParametersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **[]string** | Code of the Hotel. | 
 **partner** | **[]string** | Fiscal folio parameter associated with Partner. | 
 **code** | **[]string** | Code of the Fiscal Folio Parameter. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteFiscalPeriods

> Status DeleteFiscalPeriods(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).YearId(yearId).StartDate(startDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete FiscalPeriods.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := []string{"Inner_example"} // []string | Resort for which the Period is defined.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    yearId := []float32{float32(123)} // []float32 | Id of the Year. (optional)
    startDate := []string{time.Now()} // []string | Start Date of the Period (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteFiscalPeriods(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).YearId(yearId).StartDate(startDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteFiscalPeriods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteFiscalPeriods`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteFiscalPeriods`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteFiscalPeriodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **[]string** | Resort for which the Period is defined. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **yearId** | **[]float32** | Id of the Year. | 
 **startDate** | **[]string** | Start Date of the Period | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteFiscalYears

> Status DeleteFiscalYears(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).YearId(yearId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete FiscalYears.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := []string{"Inner_example"} // []string | Resort for which the Year is defined.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    yearId := []float32{float32(123)} // []float32 | Unique id of the Year. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteFiscalYears(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).YearId(yearId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteFiscalYears``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteFiscalYears`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteFiscalYears`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteFiscalYearsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **[]string** | Resort for which the Year is defined. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **yearId** | **[]float32** | Unique id of the Year. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteFolioArrangementCodes

> Status DeleteFolioArrangementCodes(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete FolioArrangementCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := []string{"Inner_example"} // []string | Hotel where the code is configured.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    code := []string{"Inner_example"} // []string | Configuration code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteFolioArrangementCodes(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteFolioArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteFolioArrangementCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteFolioArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteFolioArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **[]string** | Hotel where the code is configured. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **code** | **[]string** | Configuration code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteFolioPrintQueues

> Status DeleteFolioPrintQueues(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).QueueName(queueName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete FolioPrintQueues.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := []string{"Inner_example"} // []string | Property associated with folio print queue
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    queueName := []string{"Inner_example"} // []string | Folio print queue name (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteFolioPrintQueues(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).QueueName(queueName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteFolioPrintQueues``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteFolioPrintQueues`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteFolioPrintQueues`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteFolioPrintQueuesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **[]string** | Property associated with folio print queue | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **queueName** | **[]string** | Folio print queue name | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteFolioTypesConfig

> Status DeleteFolioTypesConfig(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete FolioTypesConfig.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := []string{"Inner_example"} // []string | Hotel where the code is configured.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    code := []string{"Inner_example"} // []string | Configuration code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteFolioTypesConfig(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteFolioTypesConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteFolioTypesConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteFolioTypesConfig`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteFolioTypesConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **[]string** | Hotel where the code is configured. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **code** | **[]string** | Configuration code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteForeignCurrencies

> Status DeleteForeignCurrencies(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CurrencyCodes(currencyCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete ForeignCurrencies.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    currencyCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteForeignCurrencies(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CurrencyCodes(currencyCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteForeignCurrencies``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteForeignCurrencies`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteForeignCurrencies`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteForeignCurrenciesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **currencyCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteGlobalExchangeRates

> Status DeleteGlobalExchangeRates(ctx).Authorization(authorization).XAppKey(xAppKey).ExchangeRates(exchangeRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete GlobalExchangeRates.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    exchangeRates := *openapiclient.NewDeleteExchangeRatesRequest() // DeleteExchangeRatesRequest | Global Exchange Rates to be Set.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteGlobalExchangeRates(context.Background()).Authorization(authorization).XAppKey(xAppKey).ExchangeRates(exchangeRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteGlobalExchangeRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteGlobalExchangeRates`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteGlobalExchangeRates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteGlobalExchangeRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **exchangeRates** | [**DeleteExchangeRatesRequest**](DeleteExchangeRatesRequest.md) | Global Exchange Rates to be Set. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteGroupArrangementCodes

> Status DeleteGroupArrangementCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete GroupArrangementCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    code := []string{"Inner_example"} // []string | Configuration code. (optional)
    hotelId := []string{"Inner_example"} // []string | Hotel where the code is configured. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteGroupArrangementCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteGroupArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteGroupArrangementCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteGroupArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteGroupArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **code** | **[]string** | Configuration code. | 
 **hotelId** | **[]string** | Hotel where the code is configured. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteNoShowPostingRules

> Status DeleteNoShowPostingRules(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationType(reservationType).SourceCode(sourceCode).PostingRule(postingRule).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete NoShowPostingRules.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := []string{"Inner_example"} // []string | Indicates for which hotel this posting rule apply to.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationType := []string{"Inner_example"} // []string | Type of the reservation. (optional)
    sourceCode := []string{"Inner_example"} // []string | Source code of the reservation. (optional)
    postingRule := []string{"PostingRule_example"} // []string | Simple Type for Posting Rule Types. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteNoShowPostingRules(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationType(reservationType).SourceCode(sourceCode).PostingRule(postingRule).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteNoShowPostingRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteNoShowPostingRules`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteNoShowPostingRules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteNoShowPostingRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **[]string** | Indicates for which hotel this posting rule apply to. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationType** | **[]string** | Type of the reservation. | 
 **sourceCode** | **[]string** | Source code of the reservation. | 
 **postingRule** | **[]string** | Simple Type for Posting Rule Types. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeletePackageArrangementCodes

> Status DeletePackageArrangementCodes(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete PackageArrangementCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := []string{"Inner_example"} // []string | Hotel where the code is configured.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    code := []string{"Inner_example"} // []string | Configuration code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeletePackageArrangementCodes(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeletePackageArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeletePackageArrangementCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeletePackageArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeletePackageArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **[]string** | Hotel where the code is configured. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **code** | **[]string** | Configuration code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteRevenueBucketCodes

> Status DeleteRevenueBucketCodes(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).RevenueBucketType(revenueBucketType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete RevenueBucketCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := []string{"Inner_example"} // []string | Hotel where the code is configured.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    code := []string{"Inner_example"} // []string | Configuration code. (optional)
    revenueBucketType := []string{"Inner_example"} // []string | Revenue Export Bucket Type (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteRevenueBucketCodes(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).RevenueBucketType(revenueBucketType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteRevenueBucketCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRevenueBucketCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteRevenueBucketCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRevenueBucketCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **[]string** | Hotel where the code is configured. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **code** | **[]string** | Configuration code. | 
 **revenueBucketType** | **[]string** | Revenue Export Bucket Type | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteRevenueBucketTypes

> Status DeleteRevenueBucketTypes(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete RevenueBucketTypes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := []string{"Inner_example"} // []string | Hotel where the code is configured.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    code := []string{"Inner_example"} // []string | Configuration code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteRevenueBucketTypes(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteRevenueBucketTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRevenueBucketTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteRevenueBucketTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRevenueBucketTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **[]string** | Hotel where the code is configured. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **code** | **[]string** | Configuration code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteRevenueTypeMapping

> Status DeleteRevenueTypeMapping(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueTypeMappingID(revenueTypeMappingID).IdExtension(idExtension).IdContext(idContext).Type_(type_).RevenueType(revenueType).EventType(eventType).Space(space).TransactionCode(transactionCode).CateringOnly(cateringOnly).ServiceCharge(serviceCharge).ServiceChargeTrxCode(serviceChargeTrxCode).ServiceChargeCalulationMethod(serviceChargeCalulationMethod).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete RevenueTypeMapping.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Hotel Code to which the Revenue Type Mapping belongs to.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    revenueTypeMappingID := "revenueTypeMappingID_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    revenueType := "revenueType_example" // string | Provides information about the Revenue Type. (optional)
    eventType := "eventType_example" // string | Provides information about the Event Type. (optional)
    space := "space_example" // string | Provides information about the Space/Location for the Revenue Type. (optional)
    transactionCode := "transactionCode_example" // string | Transaction code for the Revenue Type. (optional)
    cateringOnly := "cateringOnly_example" // string | For Catering and Event. (optional)
    serviceCharge := float32(8.14) // float32 | Service Charge for the Revenue Type. (optional)
    serviceChargeTrxCode := "serviceChargeTrxCode_example" // string | Service Charge for the Revenue Type. (optional)
    serviceChargeCalulationMethod := "serviceChargeCalulationMethod_example" // string | Service Charge for the Revenue Type. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteRevenueTypeMapping(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueTypeMappingID(revenueTypeMappingID).IdExtension(idExtension).IdContext(idContext).Type_(type_).RevenueType(revenueType).EventType(eventType).Space(space).TransactionCode(transactionCode).CateringOnly(cateringOnly).ServiceCharge(serviceCharge).ServiceChargeTrxCode(serviceChargeTrxCode).ServiceChargeCalulationMethod(serviceChargeCalulationMethod).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteRevenueTypeMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRevenueTypeMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteRevenueTypeMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRevenueTypeMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **string** | Hotel Code to which the Revenue Type Mapping belongs to. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **revenueTypeMappingID** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **revenueType** | **string** | Provides information about the Revenue Type. | 
 **eventType** | **string** | Provides information about the Event Type. | 
 **space** | **string** | Provides information about the Space/Location for the Revenue Type. | 
 **transactionCode** | **string** | Transaction code for the Revenue Type. | 
 **cateringOnly** | **string** | For Catering and Event. | 
 **serviceCharge** | **float32** | Service Charge for the Revenue Type. | 
 **serviceChargeTrxCode** | **string** | Service Charge for the Revenue Type. | 
 **serviceChargeCalulationMethod** | **string** | Service Charge for the Revenue Type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteRoutingInstructions

> Status DeleteRoutingInstructions(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete RoutingInstructions.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Hotel where the code is configured.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    code := "code_example" // string | Configuration code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteRoutingInstructions(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteRoutingInstructions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRoutingInstructions`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteRoutingInstructions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRoutingInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **string** | Hotel where the code is configured. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **code** | **string** | Configuration code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTaxBrackets

> Status DeleteTaxBrackets(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxPercentage(taxPercentage).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete TaxBrackets.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := []string{"Inner_example"} // []string | Hotel Code where tax bracket belongs to.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taxPercentage := []float32{float32(123)} // []float32 | Tax Percentage for which this Tax Bracket applies. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteTaxBrackets(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxPercentage(taxPercentage).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteTaxBrackets``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTaxBrackets`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteTaxBrackets`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTaxBracketsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **[]string** | Hotel Code where tax bracket belongs to. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taxPercentage** | **[]float32** | Tax Percentage for which this Tax Bracket applies. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTaxTypes

> Status DeleteTaxTypes(ctx).TaxTypeCode(taxTypeCode).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete TaxTypes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    taxTypeCode := []string{"Inner_example"} // []string | Configuration code.
    hotelId := []string{"Inner_example"} // []string | Hotel where the code is configured.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteTaxTypes(context.Background()).TaxTypeCode(taxTypeCode).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteTaxTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTaxTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteTaxTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTaxTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxTypeCode** | **[]string** | Configuration code. | 
 **hotelId** | **[]string** | Hotel where the code is configured. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTemplateCustomNumber

> Status DeleteTemplateCustomNumber(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ConfigurationId(configurationId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove template custom number configuration.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    configurationId := "configurationId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteTemplateCustomNumber(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ConfigurationId(configurationId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteTemplateCustomNumber``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTemplateCustomNumber`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteTemplateCustomNumber`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTemplateCustomNumberRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **configurationId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTemplateCustomNumberConfig

> Status DeleteTemplateCustomNumberConfig(ctx, configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove template custom number configuration.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    configurationId := "configurationId_example" // string | Unique ID of the configuration
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteTemplateCustomNumberConfig(context.Background(), configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteTemplateCustomNumberConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTemplateCustomNumberConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteTemplateCustomNumberConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**configurationId** | **string** | Unique ID of the configuration | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTemplateCustomNumberConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTemplateTransactionCodes

> Status DeleteTemplateTransactionCodes(ctx).TransactionCodes(transactionCodes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete TemplateTransactionCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    transactionCodes := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteTemplateTransactionCodes(context.Background()).TransactionCodes(transactionCodes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteTemplateTransactionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTemplateTransactionCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteTemplateTransactionCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTemplateTransactionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionCodes** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTemplateTransactionGroups

> Status DeleteTemplateTransactionGroups(ctx).TemplateTransactionCodes(templateTransactionCodes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete TemplateTransactionGroups.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    templateTransactionCodes := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteTemplateTransactionGroups(context.Background()).TemplateTransactionCodes(templateTransactionCodes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteTemplateTransactionGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTemplateTransactionGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteTemplateTransactionGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTemplateTransactionGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateTransactionCodes** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTemplateTransactionSubgroups

> Status DeleteTemplateTransactionSubgroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Subgroup(subgroup).Group(group).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete TemplateTransactionSubgroups.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    subgroup := []string{"Inner_example"} // []string | Template transaction subgroup configuration code (optional)
    group := []string{"Inner_example"} // []string | Template transaction group configuration code (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteTemplateTransactionSubgroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Subgroup(subgroup).Group(group).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteTemplateTransactionSubgroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTemplateTransactionSubgroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteTemplateTransactionSubgroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTemplateTransactionSubgroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **subgroup** | **[]string** | Template transaction subgroup configuration code | 
 **group** | **[]string** | Template transaction group configuration code | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTransactionCodes

> Status DeleteTransactionCodes(ctx, transactionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete TransactionCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    transactionCode := "transactionCode_example" // string | Transaction Code in OPERA
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteTransactionCodes(context.Background(), transactionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteTransactionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTransactionCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteTransactionCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionCode** | **string** | Transaction Code in OPERA | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTransactionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTransactionDiscounts

> Status DeleteTransactionDiscounts(ctx, hotelId, transactionDiscountCode).Execute()

Operation to delete TransactionDiscounts.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    transactionDiscountCode := "transactionDiscountCode_example" // string | Unique code for transaction discount

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteTransactionDiscounts(context.Background(), hotelId, transactionDiscountCode).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteTransactionDiscounts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTransactionDiscounts`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteTransactionDiscounts`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 
**transactionDiscountCode** | **string** | Unique code for transaction discount | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTransactionDiscountsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTransactionGroups

> Status DeleteTransactionGroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete TransactionGroups.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    code := []string{"Inner_example"} // []string | Configuration code. (optional)
    hotelId := []string{"Inner_example"} // []string | Hotel where the code is configured. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteTransactionGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteTransactionGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTransactionGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteTransactionGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTransactionGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **code** | **[]string** | Configuration code. | 
 **hotelId** | **[]string** | Hotel where the code is configured. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTransactionSubgroups

> Status DeleteTransactionSubgroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Subgroup(subgroup).Group(group).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete TransactionSubgroups.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    subgroup := []string{"Inner_example"} // []string | Template transaction subgroup configuration code (optional)
    group := []string{"Inner_example"} // []string | Template transaction group configuration code (optional)
    hotelId := []string{"Inner_example"} // []string | Hotel code where the transaction subgroup is configured. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteTransactionSubgroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Subgroup(subgroup).Group(group).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteTransactionSubgroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTransactionSubgroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteTransactionSubgroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTransactionSubgroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **subgroup** | **[]string** | Template transaction subgroup configuration code | 
 **group** | **[]string** | Template transaction group configuration code | 
 **hotelId** | **[]string** | Hotel code where the transaction subgroup is configured. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAdjustmentCodes

> AdjustmentCodes GetAdjustmentCodes(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdjustmentCodes(adjustmentCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch AdjustmentCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    adjustmentCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetAdjustmentCodes(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdjustmentCodes(adjustmentCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetAdjustmentCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAdjustmentCodes`: AdjustmentCodes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetAdjustmentCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAdjustmentCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **adjustmentCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AdjustmentCodes**](AdjustmentCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetArticles

> ArticlesInfo GetArticles(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionCodes(transactionCodes).ArticleCodes(articleCodes).UniversalProductCode(universalProductCode).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get articles



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionCodes := []string{"Inner_example"} // []string |  (optional)
    articleCodes := []string{"Inner_example"} // []string |  (optional)
    universalProductCode := "universalProductCode_example" // string | Unique Universal product code search criteria. (optional)
    includeInactive := false // bool | Indicator that tells whether to include inactive articles in search results. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetArticles(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionCodes(transactionCodes).ArticleCodes(articleCodes).UniversalProductCode(universalProductCode).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetArticles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetArticles`: ArticlesInfo
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetArticles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetArticlesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionCodes** | **[]string** |  | 
 **articleCodes** | **[]string** |  | 
 **universalProductCode** | **string** | Unique Universal product code search criteria. | 
 **includeInactive** | **bool** | Indicator that tells whether to include inactive articles in search results. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ArticlesInfo**](ArticlesInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAuthorizationConfigRules

> AuthorizationConfigRulesInfo GetAuthorizationConfigRules(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch AuthorizationConfigRules.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetAuthorizationConfigRules(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetAuthorizationConfigRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAuthorizationConfigRules`: AuthorizationConfigRulesInfo
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetAuthorizationConfigRules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAuthorizationConfigRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AuthorizationConfigRulesInfo**](AuthorizationConfigRulesInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAuthorizerGroups

> AuthorizerGroups GetAuthorizerGroups(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizerGroupsCodes(authorizerGroupsCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch AuthorizerGroups.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    authorizerGroupsCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetAuthorizerGroups(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizerGroupsCodes(authorizerGroupsCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetAuthorizerGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAuthorizerGroups`: AuthorizerGroups
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetAuthorizerGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAuthorizerGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **authorizerGroupsCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AuthorizerGroups**](AuthorizerGroups.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAvailableCashierNumber

> CashierNumber GetAvailableCashierNumber(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch AvailableCashierNumber.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetAvailableCashierNumber(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetAvailableCashierNumber``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAvailableCashierNumber`: CashierNumber
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetAvailableCashierNumber`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAvailableCashierNumberRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CashierNumber**](CashierNumber.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBudgetForecast

> BudgetForecastInformation GetBudgetForecast(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Year(year).MarketSegmentNights(marketSegmentNights).MarketSegmentRevenue(marketSegmentRevenue).MarketSegmentABVariance(marketSegmentABVariance).MarketSegmentAFVariance(marketSegmentAFVariance).MarketSegmentActual(marketSegmentActual).MarketSegmentBudget(marketSegmentBudget).MarketSegmentFBVariance(marketSegmentFBVariance).MarketSegmentForecast(marketSegmentForecast).MarketSegmentMarketCodes(marketSegmentMarketCodes).RateSegmentNights(rateSegmentNights).RateSegmentRevenue(rateSegmentRevenue).RateSegmentABVariance(rateSegmentABVariance).RateSegmentAFVariance(rateSegmentAFVariance).RateSegmentActual(rateSegmentActual).RateSegmentBudget(rateSegmentBudget).RateSegmentFBVariance(rateSegmentFBVariance).RateSegmentForecast(rateSegmentForecast).RateSegmentRateCodes(rateSegmentRateCodes).CustomSegmentCustomValue(customSegmentCustomValue).CustomSegmentABVariance(customSegmentABVariance).CustomSegmentAFVariance(customSegmentAFVariance).CustomSegmentActual(customSegmentActual).CustomSegmentBudget(customSegmentBudget).CustomSegmentFBVariance(customSegmentFBVariance).CustomSegmentForecast(customSegmentForecast).CustomSegmentCustomCodes(customSegmentCustomCodes).TransactionSegmentRevenue(transactionSegmentRevenue).TransactionSegmentABVariance(transactionSegmentABVariance).TransactionSegmentAFVariance(transactionSegmentAFVariance).TransactionSegmentActual(transactionSegmentActual).TransactionSegmentBudget(transactionSegmentBudget).TransactionSegmentFBVariance(transactionSegmentFBVariance).TransactionSegmentForecast(transactionSegmentForecast).TransactionSegmentTransactionCodes(transactionSegmentTransactionCodes).TransactionSegmentTransactionCodeGrp(transactionSegmentTransactionCodeGrp).CateringSegmentCovers(cateringSegmentCovers).CateringSegmentRevenue(cateringSegmentRevenue).CateringSegmentABVariance(cateringSegmentABVariance).CateringSegmentAFVariance(cateringSegmentAFVariance).CateringSegmentActual(cateringSegmentActual).CateringSegmentBudget(cateringSegmentBudget).CateringSegmentFBVariance(cateringSegmentFBVariance).CateringSegmentForecast(cateringSegmentForecast).CateringSegmentCateringCodeGrp(cateringSegmentCateringCodeGrp).CateringSegmentCateringCodes(cateringSegmentCateringCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch BudgetForecast.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Opera Hotel code for the Fetch Revenue information. (optional)
    year := "year_example" // string | Year of revenue to be fetched. (optional)
    marketSegmentNights := true // bool | Flag to indicate if nights information has to be included. (optional)
    marketSegmentRevenue := true // bool | Flag to indicate if revenue information has to be included. (optional)
    marketSegmentABVariance := false // bool | Flag to include ABVariance revenue/nights information. (optional)
    marketSegmentAFVariance := false // bool | Flag to include AFVariance revenue/nights information. (optional)
    marketSegmentActual := false // bool | Flag to include Actual revenue/nights information. (optional)
    marketSegmentBudget := false // bool | Flag to include Budget revenue/nights information. (optional)
    marketSegmentFBVariance := false // bool | Flag to include FBVariance revenue/nights information. (optional)
    marketSegmentForecast := false // bool | Flag to include Forecast revenue/nights information. (optional)
    marketSegmentMarketCodes := []string{"Inner_example"} // []string |  (optional)
    rateSegmentNights := true // bool | Flag to indicate if nights information has to be included. (optional)
    rateSegmentRevenue := true // bool | Flag to indicate if revenue information has to be included. (optional)
    rateSegmentABVariance := false // bool | Flag to include ABVariance revenue/nights information. (optional)
    rateSegmentAFVariance := false // bool | Flag to include AFVariance revenue/nights information. (optional)
    rateSegmentActual := false // bool | Flag to include Actual revenue/nights information. (optional)
    rateSegmentBudget := false // bool | Flag to include Budget revenue/nights information. (optional)
    rateSegmentFBVariance := false // bool | Flag to include FBVariance revenue/nights information. (optional)
    rateSegmentForecast := false // bool | Flag to include Forecast revenue/nights information. (optional)
    rateSegmentRateCodes := []string{"Inner_example"} // []string |  (optional)
    customSegmentCustomValue := true // bool | Flag to indicate if Value information has to be fetched. (optional)
    customSegmentABVariance := false // bool | Flag to include ABVariance revenue/nights information. (optional)
    customSegmentAFVariance := false // bool | Flag to include AFVariance revenue/nights information. (optional)
    customSegmentActual := false // bool | Flag to include Actual revenue/nights information. (optional)
    customSegmentBudget := false // bool | Flag to include Budget revenue/nights information. (optional)
    customSegmentFBVariance := false // bool | Flag to include FBVariance revenue/nights information. (optional)
    customSegmentForecast := false // bool | Flag to include Forecast revenue/nights information. (optional)
    customSegmentCustomCodes := []string{"Inner_example"} // []string |  (optional)
    transactionSegmentRevenue := true // bool | Flag to indicate if revenue information has to be fetched. (optional)
    transactionSegmentABVariance := false // bool | Flag to include ABVariance revenue/nights information. (optional)
    transactionSegmentAFVariance := false // bool | Flag to include AFVariance revenue/nights information. (optional)
    transactionSegmentActual := false // bool | Flag to include Actual revenue/nights information. (optional)
    transactionSegmentBudget := false // bool | Flag to include Budget revenue/nights information. (optional)
    transactionSegmentFBVariance := false // bool | Flag to include FBVariance revenue/nights information. (optional)
    transactionSegmentForecast := false // bool | Flag to include Forecast revenue/nights information. (optional)
    transactionSegmentTransactionCodes := []string{"Inner_example"} // []string |  (optional)
    transactionSegmentTransactionCodeGrp := "transactionSegmentTransactionCodeGrp_example" // string | Transaction code group of segment code. (optional)
    cateringSegmentCovers := true // bool | Flag to indicate if Covers information has to be included. (optional)
    cateringSegmentRevenue := true // bool | Flag to indicate if revenue information has to be included. (optional)
    cateringSegmentABVariance := false // bool | Flag to include ABVariance revenue/nights information. (optional)
    cateringSegmentAFVariance := false // bool | Flag to include AFVariance revenue/nights information. (optional)
    cateringSegmentActual := false // bool | Flag to include Actual revenue/nights information. (optional)
    cateringSegmentBudget := false // bool | Flag to include Budget revenue/nights information. (optional)
    cateringSegmentFBVariance := false // bool | Flag to include FBVariance revenue/nights information. (optional)
    cateringSegmentForecast := false // bool | Flag to include Forecast revenue/nights information. (optional)
    cateringSegmentCateringCodeGrp := "cateringSegmentCateringCodeGrp_example" // string | Catering code group of segment code. (optional)
    cateringSegmentCateringCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetBudgetForecast(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Year(year).MarketSegmentNights(marketSegmentNights).MarketSegmentRevenue(marketSegmentRevenue).MarketSegmentABVariance(marketSegmentABVariance).MarketSegmentAFVariance(marketSegmentAFVariance).MarketSegmentActual(marketSegmentActual).MarketSegmentBudget(marketSegmentBudget).MarketSegmentFBVariance(marketSegmentFBVariance).MarketSegmentForecast(marketSegmentForecast).MarketSegmentMarketCodes(marketSegmentMarketCodes).RateSegmentNights(rateSegmentNights).RateSegmentRevenue(rateSegmentRevenue).RateSegmentABVariance(rateSegmentABVariance).RateSegmentAFVariance(rateSegmentAFVariance).RateSegmentActual(rateSegmentActual).RateSegmentBudget(rateSegmentBudget).RateSegmentFBVariance(rateSegmentFBVariance).RateSegmentForecast(rateSegmentForecast).RateSegmentRateCodes(rateSegmentRateCodes).CustomSegmentCustomValue(customSegmentCustomValue).CustomSegmentABVariance(customSegmentABVariance).CustomSegmentAFVariance(customSegmentAFVariance).CustomSegmentActual(customSegmentActual).CustomSegmentBudget(customSegmentBudget).CustomSegmentFBVariance(customSegmentFBVariance).CustomSegmentForecast(customSegmentForecast).CustomSegmentCustomCodes(customSegmentCustomCodes).TransactionSegmentRevenue(transactionSegmentRevenue).TransactionSegmentABVariance(transactionSegmentABVariance).TransactionSegmentAFVariance(transactionSegmentAFVariance).TransactionSegmentActual(transactionSegmentActual).TransactionSegmentBudget(transactionSegmentBudget).TransactionSegmentFBVariance(transactionSegmentFBVariance).TransactionSegmentForecast(transactionSegmentForecast).TransactionSegmentTransactionCodes(transactionSegmentTransactionCodes).TransactionSegmentTransactionCodeGrp(transactionSegmentTransactionCodeGrp).CateringSegmentCovers(cateringSegmentCovers).CateringSegmentRevenue(cateringSegmentRevenue).CateringSegmentABVariance(cateringSegmentABVariance).CateringSegmentAFVariance(cateringSegmentAFVariance).CateringSegmentActual(cateringSegmentActual).CateringSegmentBudget(cateringSegmentBudget).CateringSegmentFBVariance(cateringSegmentFBVariance).CateringSegmentForecast(cateringSegmentForecast).CateringSegmentCateringCodeGrp(cateringSegmentCateringCodeGrp).CateringSegmentCateringCodes(cateringSegmentCateringCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetBudgetForecast``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBudgetForecast`: BudgetForecastInformation
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetBudgetForecast`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBudgetForecastRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Opera Hotel code for the Fetch Revenue information. | 
 **year** | **string** | Year of revenue to be fetched. | 
 **marketSegmentNights** | **bool** | Flag to indicate if nights information has to be included. | 
 **marketSegmentRevenue** | **bool** | Flag to indicate if revenue information has to be included. | 
 **marketSegmentABVariance** | **bool** | Flag to include ABVariance revenue/nights information. | 
 **marketSegmentAFVariance** | **bool** | Flag to include AFVariance revenue/nights information. | 
 **marketSegmentActual** | **bool** | Flag to include Actual revenue/nights information. | 
 **marketSegmentBudget** | **bool** | Flag to include Budget revenue/nights information. | 
 **marketSegmentFBVariance** | **bool** | Flag to include FBVariance revenue/nights information. | 
 **marketSegmentForecast** | **bool** | Flag to include Forecast revenue/nights information. | 
 **marketSegmentMarketCodes** | **[]string** |  | 
 **rateSegmentNights** | **bool** | Flag to indicate if nights information has to be included. | 
 **rateSegmentRevenue** | **bool** | Flag to indicate if revenue information has to be included. | 
 **rateSegmentABVariance** | **bool** | Flag to include ABVariance revenue/nights information. | 
 **rateSegmentAFVariance** | **bool** | Flag to include AFVariance revenue/nights information. | 
 **rateSegmentActual** | **bool** | Flag to include Actual revenue/nights information. | 
 **rateSegmentBudget** | **bool** | Flag to include Budget revenue/nights information. | 
 **rateSegmentFBVariance** | **bool** | Flag to include FBVariance revenue/nights information. | 
 **rateSegmentForecast** | **bool** | Flag to include Forecast revenue/nights information. | 
 **rateSegmentRateCodes** | **[]string** |  | 
 **customSegmentCustomValue** | **bool** | Flag to indicate if Value information has to be fetched. | 
 **customSegmentABVariance** | **bool** | Flag to include ABVariance revenue/nights information. | 
 **customSegmentAFVariance** | **bool** | Flag to include AFVariance revenue/nights information. | 
 **customSegmentActual** | **bool** | Flag to include Actual revenue/nights information. | 
 **customSegmentBudget** | **bool** | Flag to include Budget revenue/nights information. | 
 **customSegmentFBVariance** | **bool** | Flag to include FBVariance revenue/nights information. | 
 **customSegmentForecast** | **bool** | Flag to include Forecast revenue/nights information. | 
 **customSegmentCustomCodes** | **[]string** |  | 
 **transactionSegmentRevenue** | **bool** | Flag to indicate if revenue information has to be fetched. | 
 **transactionSegmentABVariance** | **bool** | Flag to include ABVariance revenue/nights information. | 
 **transactionSegmentAFVariance** | **bool** | Flag to include AFVariance revenue/nights information. | 
 **transactionSegmentActual** | **bool** | Flag to include Actual revenue/nights information. | 
 **transactionSegmentBudget** | **bool** | Flag to include Budget revenue/nights information. | 
 **transactionSegmentFBVariance** | **bool** | Flag to include FBVariance revenue/nights information. | 
 **transactionSegmentForecast** | **bool** | Flag to include Forecast revenue/nights information. | 
 **transactionSegmentTransactionCodes** | **[]string** |  | 
 **transactionSegmentTransactionCodeGrp** | **string** | Transaction code group of segment code. | 
 **cateringSegmentCovers** | **bool** | Flag to indicate if Covers information has to be included. | 
 **cateringSegmentRevenue** | **bool** | Flag to indicate if revenue information has to be included. | 
 **cateringSegmentABVariance** | **bool** | Flag to include ABVariance revenue/nights information. | 
 **cateringSegmentAFVariance** | **bool** | Flag to include AFVariance revenue/nights information. | 
 **cateringSegmentActual** | **bool** | Flag to include Actual revenue/nights information. | 
 **cateringSegmentBudget** | **bool** | Flag to include Budget revenue/nights information. | 
 **cateringSegmentFBVariance** | **bool** | Flag to include FBVariance revenue/nights information. | 
 **cateringSegmentForecast** | **bool** | Flag to include Forecast revenue/nights information. | 
 **cateringSegmentCateringCodeGrp** | **string** | Catering code group of segment code. | 
 **cateringSegmentCateringCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BudgetForecastInformation**](BudgetForecastInformation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCashiers

> CashiersDetails GetCashiers(ctx).CashierIDs(cashierIDs).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Name(name).IncludeInactive(includeInactive).AppUser(appUser).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get cashiers



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    cashierIDs := []float32{float32(123)} // []float32 | Numberic code for cashier ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    name := "name_example" // string | Partial name of a cashier. (optional)
    includeInactive := false // bool | Indicator that tells whether to include inactive cashiers in search results. (optional)
    appUser := "appUser_example" // string | Name of the application user associated with the cashier id (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetCashiers(context.Background()).CashierIDs(cashierIDs).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Name(name).IncludeInactive(includeInactive).AppUser(appUser).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetCashiers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCashiers`: CashiersDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetCashiers`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCashiersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cashierIDs** | **[]float32** | Numberic code for cashier ID. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **name** | **string** | Partial name of a cashier. | 
 **includeInactive** | **bool** | Indicator that tells whether to include inactive cashiers in search results. | 
 **appUser** | **string** | Name of the application user associated with the cashier id | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CashiersDetails**](CashiersDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCollectingAgentTaxes

> CollectingAgentTaxes GetCollectingAgentTaxes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).TaxCodes(taxCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch CollectingAgentTaxes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | It represents Hotel Code (optional)
    taxCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetCollectingAgentTaxes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).TaxCodes(taxCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetCollectingAgentTaxes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCollectingAgentTaxes`: CollectingAgentTaxes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetCollectingAgentTaxes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCollectingAgentTaxesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | It represents Hotel Code | 
 **taxCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CollectingAgentTaxes**](CollectingAgentTaxes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCompAuthorizers

> CompAuthorizers GetCompAuthorizers(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeCompAuthorizerDetails(includeCompAuthorizerDetails).IncludeInactiveAuthorizers(includeInactiveAuthorizers).IncludeTerminatedAuthorizers(includeTerminatedAuthorizers).Authorizer(authorizer).FirstName(firstName).LastName(lastName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch CompAuthorizers.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeCompAuthorizerDetails := false // bool | Configuring this flag to be TRUE will return the details of the comp authorizers. (optional)
    includeInactiveAuthorizers := false // bool | Configuring this flag to be TRUE will return also the inactive authorizers. (optional)
    includeTerminatedAuthorizers := false // bool | Configuring this flag to be TRUE will return the terminated authorizers. (optional)
    authorizer := "authorizer_example" // string | Name for the authorizer. (optional)
    firstName := "firstName_example" // string | First name for the authorizer. (optional)
    lastName := "lastName_example" // string | Last name for the authorizer. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetCompAuthorizers(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeCompAuthorizerDetails(includeCompAuthorizerDetails).IncludeInactiveAuthorizers(includeInactiveAuthorizers).IncludeTerminatedAuthorizers(includeTerminatedAuthorizers).Authorizer(authorizer).FirstName(firstName).LastName(lastName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetCompAuthorizers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCompAuthorizers`: CompAuthorizers
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetCompAuthorizers`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCompAuthorizersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeCompAuthorizerDetails** | **bool** | Configuring this flag to be TRUE will return the details of the comp authorizers. | 
 **includeInactiveAuthorizers** | **bool** | Configuring this flag to be TRUE will return also the inactive authorizers. | 
 **includeTerminatedAuthorizers** | **bool** | Configuring this flag to be TRUE will return the terminated authorizers. | 
 **authorizer** | **string** | Name for the authorizer. | 
 **firstName** | **string** | First name for the authorizer. | 
 **lastName** | **string** | Last name for the authorizer. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CompAuthorizers**](CompAuthorizers.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCompBucketRedemptionCodes

> CompBucketRedemptionConfigDetails GetCompBucketRedemptionCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).RedemptionCode(redemptionCode).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch Comp Bucket Redemption Codes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    redemptionCode := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetCompBucketRedemptionCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).RedemptionCode(redemptionCode).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetCompBucketRedemptionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCompBucketRedemptionCodes`: CompBucketRedemptionConfigDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetCompBucketRedemptionCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCompBucketRedemptionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | Hotel code. | 
 **redemptionCode** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CompBucketRedemptionConfigDetails**](CompBucketRedemptionConfigDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCompBucketRedemptionConfig

> CompBucketRedemptionConfigDetails GetCompBucketRedemptionConfig(ctx, redemptionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch Comp Bucket Redemption Codes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    redemptionCode := "redemptionCode_example" // string | Bucket Redemption Code
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetCompBucketRedemptionConfig(context.Background(), redemptionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetCompBucketRedemptionConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCompBucketRedemptionConfig`: CompBucketRedemptionConfigDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetCompBucketRedemptionConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**redemptionCode** | **string** | Bucket Redemption Code | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCompBucketRedemptionConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CompBucketRedemptionConfigDetails**](CompBucketRedemptionConfigDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCompTypes

> CompTypesDetails GetCompTypes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompTypeCode(compTypeCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to Fetch Comp Types.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the source hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    compTypeCode := "compTypeCode_example" // string | Code is used to identify the CompType. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetCompTypes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompTypeCode(compTypeCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetCompTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCompTypes`: CompTypesDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetCompTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the source hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCompTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **compTypeCode** | **string** | Code is used to identify the CompType. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CompTypesDetails**](CompTypesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCurrencyExchangeServiceTaxes

> CurrencyExchangeServiceTaxes GetCurrencyExchangeServiceTaxes(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Codes(codes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch CurrencyExchangeServiceTaxes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    codes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetCurrencyExchangeServiceTaxes(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Codes(codes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetCurrencyExchangeServiceTaxes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCurrencyExchangeServiceTaxes`: CurrencyExchangeServiceTaxes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetCurrencyExchangeServiceTaxes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCurrencyExchangeServiceTaxesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **codes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CurrencyExchangeServiceTaxes**](CurrencyExchangeServiceTaxes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCustomChargeCodes

> CustomChargesConfigDetails GetCustomChargeCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).ConfigurationId(configurationId).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch Custom Charge Codes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    configurationId := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetCustomChargeCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).ConfigurationId(configurationId).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetCustomChargeCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCustomChargeCodes`: CustomChargesConfigDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetCustomChargeCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCustomChargeCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | Hotel code. | 
 **configurationId** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CustomChargesConfigDetails**](CustomChargesConfigDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCustomChargeExemptions

> CustomChargeExemptionsConfig GetCustomChargeExemptions(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ConfigurationId(configurationId).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch Custom Charge Exemptions Config.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := []string{"Inner_example"} // []string |  (optional)
    configurationId := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    includeInactive := true // bool | Indicator that tells whether to include inactive articles in search results. (optional) (default to false)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetCustomChargeExemptions(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ConfigurationId(configurationId).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetCustomChargeExemptions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCustomChargeExemptions`: CustomChargeExemptionsConfig
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetCustomChargeExemptions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCustomChargeExemptionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **[]string** |  | 
 **configurationId** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **includeInactive** | **bool** | Indicator that tells whether to include inactive articles in search results. | [default to false]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CustomChargeExemptionsConfig**](CustomChargeExemptionsConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCustomChargeExemptionsConfig

> CustomChargeExemptionsConfig GetCustomChargeExemptionsConfig(ctx, configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch Custom Charge Exemptions Config.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    configurationId := "configurationId_example" // string | Unique ID of the configuration
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    includeInactive := true // bool | Indicator that tells whether to include inactive articles in search results. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetCustomChargeExemptionsConfig(context.Background(), configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetCustomChargeExemptionsConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCustomChargeExemptionsConfig`: CustomChargeExemptionsConfig
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetCustomChargeExemptionsConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**configurationId** | **string** | Unique ID of the configuration | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCustomChargeExemptionsConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **includeInactive** | **bool** | Indicator that tells whether to include inactive articles in search results. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CustomChargeExemptionsConfig**](CustomChargeExemptionsConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCustomChargesConfig

> CustomChargesConfigDetails GetCustomChargesConfig(ctx, configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch Custom Charge Codes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    configurationId := "configurationId_example" // string | Unique ID of the configuration
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetCustomChargesConfig(context.Background(), configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetCustomChargesConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCustomChargesConfig`: CustomChargesConfigDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetCustomChargesConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**configurationId** | **string** | Unique ID of the configuration | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCustomChargesConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CustomChargesConfigDetails**](CustomChargesConfigDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCustomNumberConfig

> CustomNumberConfigDetails GetCustomNumberConfig(ctx, configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).WildCard(wildCard).Description(description).Area(area).StartDate(startDate).EndDate(endDate).Duration(duration).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch custom number config.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    configurationId := "configurationId_example" // string | Unique ID of the configuration
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeInactive := true // bool | Indicator that tells whether to return the inactive custom number configuration in search results. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | The description of the custom number configuration code. (optional)
    area := "area_example" // string | Receipt (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetCustomNumberConfig(context.Background(), configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).WildCard(wildCard).Description(description).Area(area).StartDate(startDate).EndDate(endDate).Duration(duration).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetCustomNumberConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCustomNumberConfig`: CustomNumberConfigDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetCustomNumberConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**configurationId** | **string** | Unique ID of the configuration | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCustomNumberConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeInactive** | **bool** | Indicator that tells whether to return the inactive custom number configuration in search results. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | The description of the custom number configuration code. | 
 **area** | **string** | Receipt | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CustomNumberConfigDetails**](CustomNumberConfigDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCustomNumbers

> CustomNumberConfigDetails GetCustomNumbers(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).IncludeInactive(includeInactive).ConfigurationId(configurationId).WildCard(wildCard).Description(description).Area(area).StartDate(startDate).EndDate(endDate).Duration(duration).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch custom number config.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    includeInactive := true // bool | Indicator that tells whether to return the inactive custom number configuration in search results. (optional)
    configurationId := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | The description of the custom number configuration code. (optional)
    area := "area_example" // string | Receipt (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetCustomNumbers(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).IncludeInactive(includeInactive).ConfigurationId(configurationId).WildCard(wildCard).Description(description).Area(area).StartDate(startDate).EndDate(endDate).Duration(duration).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetCustomNumbers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCustomNumbers`: CustomNumberConfigDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetCustomNumbers`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCustomNumbersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | Hotel code. | 
 **includeInactive** | **bool** | Indicator that tells whether to return the inactive custom number configuration in search results. | 
 **configurationId** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | The description of the custom number configuration code. | 
 **area** | **string** | Receipt | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CustomNumberConfigDetails**](CustomNumberConfigDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDailyPlanCodes

> DailyPlanCodes GetDailyPlanCodes(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeTransactionCodes(includeTransactionCodes).ArrangementCodes(arrangementCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch DailyPlanCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeTransactionCodes := false // bool | A flag that determines whether or not to fetch associated transaction codes. Fetches only the arrangement codes when this flag is true. (optional)
    arrangementCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetDailyPlanCodes(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeTransactionCodes(includeTransactionCodes).ArrangementCodes(arrangementCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetDailyPlanCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDailyPlanCodes`: DailyPlanCodes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetDailyPlanCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDailyPlanCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeTransactionCodes** | **bool** | A flag that determines whether or not to fetch associated transaction codes. Fetches only the arrangement codes when this flag is true. | 
 **arrangementCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**DailyPlanCodes**](DailyPlanCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDefaultPaymentMethodRule

> DefaultPaymentMethodRule GetDefaultPaymentMethodRule(ctx).HotelIds(hotelIds).TransactionCodes(transactionCodes).PaymentMethods(paymentMethods).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch DefaultPaymentMethodRule.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    transactionCodes := []string{"Inner_example"} // []string | 
    paymentMethods := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple Type for payment method fetch instruction. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetDefaultPaymentMethodRule(context.Background()).HotelIds(hotelIds).TransactionCodes(transactionCodes).PaymentMethods(paymentMethods).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetDefaultPaymentMethodRule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDefaultPaymentMethodRule`: DefaultPaymentMethodRule
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetDefaultPaymentMethodRule`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDefaultPaymentMethodRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **transactionCodes** | **[]string** |  | 
 **paymentMethods** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **fetchInstructions** | **[]string** | Simple Type for payment method fetch instruction. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**DefaultPaymentMethodRule**](DefaultPaymentMethodRule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetExchangeRates

> ExchangeRatesDetails GetExchangeRates(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExchangeTypes(exchangeTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch ExchangeRates.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    exchangeTypes := []string{"ExchangeTypes_example"} // []string | E-certificate conversion. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetExchangeRates(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExchangeTypes(exchangeTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetExchangeRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExchangeRates`: ExchangeRatesDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetExchangeRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetExchangeRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **exchangeTypes** | **[]string** | E-certificate conversion. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ExchangeRatesDetails**](ExchangeRatesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetExchangeRatesInfo

> ExchangeRatesDetails GetExchangeRatesInfo(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ExchangeTypes(exchangeTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch ExchangeRates.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Property where exchange rate is set. (optional)
    exchangeTypes := []string{"ExchangeTypes_example"} // []string | E-certificate conversion. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetExchangeRatesInfo(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ExchangeTypes(exchangeTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetExchangeRatesInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExchangeRatesInfo`: ExchangeRatesDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetExchangeRatesInfo`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetExchangeRatesInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Property where exchange rate is set. | 
 **exchangeTypes** | **[]string** | E-certificate conversion. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ExchangeRatesDetails**](ExchangeRatesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetExpenseArrangementCodes

> ExpenseArrangementCodes GetExpenseArrangementCodes(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeTransactionCodes(includeTransactionCodes).ArrangementCodes(arrangementCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch ExpenseArrangementCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeTransactionCodes := false // bool | A flag that determines whether or not to fetch associated transaction codes. Fetches only the arrangement codes when this flag is true. (optional)
    arrangementCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetExpenseArrangementCodes(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeTransactionCodes(includeTransactionCodes).ArrangementCodes(arrangementCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetExpenseArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExpenseArrangementCodes`: ExpenseArrangementCodes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetExpenseArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetExpenseArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeTransactionCodes** | **bool** | A flag that determines whether or not to fetch associated transaction codes. Fetches only the arrangement codes when this flag is true. | 
 **arrangementCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ExpenseArrangementCodes**](ExpenseArrangementCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFiscalCommands

> FiscalCommandsDetails GetFiscalCommands(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).Code(code).PartnerCode(partnerCode).OperationType(operationType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Fiscal Commands



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeInactive := true // bool | Inactive flag used to include/exclude inactive transaction codes from the search result (optional)
    code := []string{"Inner_example"} // []string |  (optional)
    partnerCode := []string{"Inner_example"} // []string | Used for fiscal partner codes. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    operationType := "operationType_example" // string | List of Fiscal Operations supported. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetFiscalCommands(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).Code(code).PartnerCode(partnerCode).OperationType(operationType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetFiscalCommands``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFiscalCommands`: FiscalCommandsDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetFiscalCommands`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFiscalCommandsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeInactive** | **bool** | Inactive flag used to include/exclude inactive transaction codes from the search result | 
 **code** | **[]string** |  | 
 **partnerCode** | **[]string** | Used for fiscal partner codes. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **operationType** | **string** | List of Fiscal Operations supported. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FiscalCommandsDetails**](FiscalCommandsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFiscalFolioParameters

> FiscalFolioParameters GetFiscalFolioParameters(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).Codes(codes).WildCard(wildCard).Internal(internal).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch FiscalFolioParameters.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    code := []string{"Inner_example"} // []string |  (optional)
    codes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    internal := false // bool | Indicates whether the Fiscal Folio Parameter is user created or from seed data. Set this true to see the standard Fiscal Folio Parameters that are seeded along with the manually created Fiscal Folio Parameters. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetFiscalFolioParameters(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).Codes(codes).WildCard(wildCard).Internal(internal).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetFiscalFolioParameters``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFiscalFolioParameters`: FiscalFolioParameters
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetFiscalFolioParameters`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetFiscalFolioParametersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **code** | **[]string** |  | 
 **codes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **internal** | **bool** | Indicates whether the Fiscal Folio Parameter is user created or from seed data. Set this true to see the standard Fiscal Folio Parameters that are seeded along with the manually created Fiscal Folio Parameters. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FiscalFolioParameters**](FiscalFolioParameters.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFiscalPartners

> FiscalPartnersDetails GetFiscalPartners(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).PartnerCode(partnerCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get fiscal partners



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    partnerCode := []string{"Inner_example"} // []string | Used for fiscal partner codes. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetFiscalPartners(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).PartnerCode(partnerCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetFiscalPartners``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFiscalPartners`: FiscalPartnersDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetFiscalPartners`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFiscalPartnersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | Hotel code. | 
 **partnerCode** | **[]string** | Used for fiscal partner codes. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FiscalPartnersDetails**](FiscalPartnersDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFiscalPeriods

> FiscalPeriodsInfo GetFiscalPeriods(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Year(year).PeriodType(periodType).Period(period).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch FiscalPeriods.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Resort for which the Period is defined.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    year := float32(8.14) // float32 | Year to search for. (optional)
    periodType := "periodType_example" // string | Defined Values for Fiscal Year Type. (optional)
    period := "period_example" // string | Period to search. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetFiscalPeriods(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Year(year).PeriodType(periodType).Period(period).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetFiscalPeriods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFiscalPeriods`: FiscalPeriodsInfo
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetFiscalPeriods`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetFiscalPeriodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **string** | Resort for which the Period is defined. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **year** | **float32** | Year to search for. | 
 **periodType** | **string** | Defined Values for Fiscal Year Type. | 
 **period** | **string** | Period to search. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FiscalPeriodsInfo**](FiscalPeriodsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFiscalYears

> FiscalYears GetFiscalYears(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Year(year).YearType(yearType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch FiscalYears.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Search all years for this Resort.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    year := float32(8.14) // float32 | Year to Search. (optional)
    yearType := "yearType_example" // string | Defined Values for Fiscal Year Type. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetFiscalYears(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Year(year).YearType(yearType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetFiscalYears``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFiscalYears`: FiscalYears
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetFiscalYears`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetFiscalYearsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **string** | Search all years for this Resort. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **year** | **float32** | Year to Search. | 
 **yearType** | **string** | Defined Values for Fiscal Year Type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FiscalYears**](FiscalYears.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFolioArrangementCodes

> FolioArrangementCodes GetFolioArrangementCodes(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeTransactionCodes(includeTransactionCodes).ArrangementCodes(arrangementCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch FolioArrangementCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeTransactionCodes := false // bool | A flag that determines whether or not to fetch associated transaction codes. Fetches only the arrangement codes when this flag is true. (optional)
    arrangementCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetFolioArrangementCodes(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeTransactionCodes(includeTransactionCodes).ArrangementCodes(arrangementCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetFolioArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFolioArrangementCodes`: FolioArrangementCodes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetFolioArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetFolioArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeTransactionCodes** | **bool** | A flag that determines whether or not to fetch associated transaction codes. Fetches only the arrangement codes when this flag is true. | 
 **arrangementCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FolioArrangementCodes**](FolioArrangementCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFolioCopyLegends

> FolioCopyLegends GetFolioCopyLegends(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Codes(codes).LanguageCode(languageCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch FolioCopyLegends.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    codes := []string{"Inner_example"} // []string |  (optional)
    languageCode := "languageCode_example" // string | Language code to be searched. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetFolioCopyLegends(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Codes(codes).LanguageCode(languageCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetFolioCopyLegends``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFolioCopyLegends`: FolioCopyLegends
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetFolioCopyLegends`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetFolioCopyLegendsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **codes** | **[]string** |  | 
 **languageCode** | **string** | Language code to be searched. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FolioCopyLegends**](FolioCopyLegends.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFolioPrintQueues

> FolioPrintQueues GetFolioPrintQueues(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).QueueName(queueName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch FolioPrintQueues.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Property to be searched for
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInactive := false // bool | Determines whether to fetch inactive records or not. (optional)
    queueName := "queueName_example" // string | Queue name to be searched for (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetFolioPrintQueues(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).QueueName(queueName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetFolioPrintQueues``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFolioPrintQueues`: FolioPrintQueues
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetFolioPrintQueues`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetFolioPrintQueuesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **string** | Property to be searched for | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInactive** | **bool** | Determines whether to fetch inactive records or not. | 
 **queueName** | **string** | Queue name to be searched for | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FolioPrintQueues**](FolioPrintQueues.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFolioTypeLegendMappingsConfig

> FolioTypeLegendMappingsConfigDetails GetFolioTypeLegendMappingsConfig(ctx).HotelId(hotelId).LegendCode(legendCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioType(folioType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch folio type legend mappings config.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Property associated with folio type legend mapping
    legendCode := "legendCode_example" // string | Legend code to which folio types attached.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioType := "folioType_example" // string | Folio type to be searched. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetFolioTypeLegendMappingsConfig(context.Background()).HotelId(hotelId).LegendCode(legendCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioType(folioType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetFolioTypeLegendMappingsConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFolioTypeLegendMappingsConfig`: FolioTypeLegendMappingsConfigDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetFolioTypeLegendMappingsConfig`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetFolioTypeLegendMappingsConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **string** | Property associated with folio type legend mapping | 
 **legendCode** | **string** | Legend code to which folio types attached. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioType** | **string** | Folio type to be searched. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FolioTypeLegendMappingsConfigDetails**](FolioTypeLegendMappingsConfigDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFolioTypesConfig

> FolioTypesConfig GetFolioTypesConfig(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioTypeNamesCodes(folioTypeNamesCodes).TaxTypeCodes(taxTypeCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch FolioTypesConfig.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Folio Type Names belong to Hotels.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioTypeNamesCodes := []string{"Inner_example"} // []string |  (optional)
    taxTypeCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetFolioTypesConfig(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioTypeNamesCodes(folioTypeNamesCodes).TaxTypeCodes(taxTypeCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetFolioTypesConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFolioTypesConfig`: FolioTypesConfig
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetFolioTypesConfig`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetFolioTypesConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **string** | Folio Type Names belong to Hotels. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioTypeNamesCodes** | **[]string** |  | 
 **taxTypeCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FolioTypesConfig**](FolioTypesConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetForeignCurrencies

> ForeignCurrencies GetForeignCurrencies(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Currencies(currencies).WildCard(wildCard).Description(description).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch ForeignCurrencies.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    currencies := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description text set to the search criteria (optional)
    includeInactive := false // bool | Inactive flag used to include/exclude inactive foreign currencies from the search result (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetForeignCurrencies(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Currencies(currencies).WildCard(wildCard).Description(description).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetForeignCurrencies``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetForeignCurrencies`: ForeignCurrencies
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetForeignCurrencies`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetForeignCurrenciesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **currencies** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description text set to the search criteria | 
 **includeInactive** | **bool** | Inactive flag used to include/exclude inactive foreign currencies from the search result | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ForeignCurrencies**](ForeignCurrencies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFuturePastExchangeRates

> []ExchangeRateType GetFuturePastExchangeRates(ctx, currencyCode, hotelId).ExchangeTypes(exchangeTypes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DateRangeStart(dateRangeStart).DateRangeEnd(dateRangeEnd).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch FuturePastExchangeRates.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    currencyCode := "currencyCode_example" // string | Currency Code in OPERA
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    exchangeTypes := "Cash" // string | E-certificate conversion.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    dateRangeStart := time.Now() // string |  (optional)
    dateRangeEnd := time.Now() // string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetFuturePastExchangeRates(context.Background(), currencyCode, hotelId).ExchangeTypes(exchangeTypes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DateRangeStart(dateRangeStart).DateRangeEnd(dateRangeEnd).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetFuturePastExchangeRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFuturePastExchangeRates`: []ExchangeRateType
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetFuturePastExchangeRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**currencyCode** | **string** | Currency Code in OPERA | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFuturePastExchangeRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **exchangeTypes** | **string** | E-certificate conversion. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **dateRangeStart** | **string** |  | 
 **dateRangeEnd** | **string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**[]ExchangeRateType**](ExchangeRateType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGUINumberRules

> GUINumberRulesDetails GetGUINumberRules(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch GUINumberRules.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | Hotel code.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetGUINumberRules(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetGUINumberRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGUINumberRules`: GUINumberRulesDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetGUINumberRules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetGUINumberRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** | Hotel code. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GUINumberRulesDetails**](GUINumberRulesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGenerateTaxTypes

> TaxTypesGenerate GetGenerateTaxTypes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionCode(transactionCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch GenerateTaxTypes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionCode := "transactionCode_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetGenerateTaxTypes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionCode(transactionCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetGenerateTaxTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGenerateTaxTypes`: TaxTypesGenerate
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetGenerateTaxTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetGenerateTaxTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionCode** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TaxTypesGenerate**](TaxTypesGenerate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGlobalExchangeRatesInfo

> ExchangeRatesDetails GetGlobalExchangeRatesInfo(ctx).Authorization(authorization).XAppKey(xAppKey).ExchangeTypes(exchangeTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch GlobalExchangeRates.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    exchangeTypes := []string{"ExchangeTypes_example"} // []string | E-certificate conversion. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetGlobalExchangeRatesInfo(context.Background()).Authorization(authorization).XAppKey(xAppKey).ExchangeTypes(exchangeTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetGlobalExchangeRatesInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGlobalExchangeRatesInfo`: ExchangeRatesDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetGlobalExchangeRatesInfo`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetGlobalExchangeRatesInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **exchangeTypes** | **[]string** | E-certificate conversion. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ExchangeRatesDetails**](ExchangeRatesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGroupArrangementCodes

> GroupArrangementCodes GetGroupArrangementCodes(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeTransactionCodes(includeTransactionCodes).ArrangementCodes(arrangementCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create GroupArrangementCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeTransactionCodes := false // bool | A flag that determines whether or not to fetch associated transaction codes. Fetches only the arrangement codes when this flag is true. (optional)
    arrangementCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetGroupArrangementCodes(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeTransactionCodes(includeTransactionCodes).ArrangementCodes(arrangementCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetGroupArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGroupArrangementCodes`: GroupArrangementCodes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetGroupArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetGroupArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeTransactionCodes** | **bool** | A flag that determines whether or not to fetch associated transaction codes. Fetches only the arrangement codes when this flag is true. | 
 **arrangementCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GroupArrangementCodes**](GroupArrangementCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetNoShowPostingRules

> NoShowPostingRules GetNoShowPostingRules(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SourceCodes(sourceCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch NoShowPostingRules.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    sourceCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetNoShowPostingRules(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SourceCodes(sourceCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetNoShowPostingRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNoShowPostingRules`: NoShowPostingRules
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetNoShowPostingRules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetNoShowPostingRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **sourceCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**NoShowPostingRules**](NoShowPostingRules.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetNumberDescriptions

> NumberDescriptions GetNumberDescriptions(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).NumberCodes(numberCodes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch NumberDescriptions.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    numberCodes := []string{"Inner_example"} // []string | Used for Number specific codes for OPERA tables. Possible values of this pattern are 1, 10, 17, THOUSAND, BILLION, etc. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description text set to the search criteria (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetNumberDescriptions(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).NumberCodes(numberCodes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetNumberDescriptions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNumberDescriptions`: NumberDescriptions
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetNumberDescriptions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetNumberDescriptionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **numberCodes** | **[]string** | Used for Number specific codes for OPERA tables. Possible values of this pattern are 1, 10, 17, THOUSAND, BILLION, etc. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description text set to the search criteria | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**NumberDescriptions**](NumberDescriptions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetOperaControlSequences

> OperaControlSequences GetOperaControlSequences(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CountryCode(countryCode).Code(code).HotelCode(hotelCode).FetchInstruction(fetchInstruction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch OperaControlSequences.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Hotel code of fetch criteria
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    countryCode := "countryCode_example" // string | Country Code of fetch criteria (optional)
    code := []string{"Inner_example"} // []string | Configuration code. (optional)
    hotelCode := []string{"Inner_example"} // []string | Hotel where the code is configured. (optional)
    fetchInstruction := []string{"FetchInstruction_example"} // []string | Simple type for opera sequence instructions that can be used for partial operations. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetOperaControlSequences(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CountryCode(countryCode).Code(code).HotelCode(hotelCode).FetchInstruction(fetchInstruction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetOperaControlSequences``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetOperaControlSequences`: OperaControlSequences
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetOperaControlSequences`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetOperaControlSequencesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **string** | Hotel code of fetch criteria | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **countryCode** | **string** | Country Code of fetch criteria | 
 **code** | **[]string** | Configuration code. | 
 **hotelCode** | **[]string** | Hotel where the code is configured. | 
 **fetchInstruction** | **[]string** | Simple type for opera sequence instructions that can be used for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**OperaControlSequences**](OperaControlSequences.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPackageArrangementCodes

> PackageArrangementCodes GetPackageArrangementCodes(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArrangementCodes(arrangementCodes).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch PackageArrangementCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    arrangementCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    includeInactive := false // bool | A flag that determines whether to fetch active records or inactive records (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetPackageArrangementCodes(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArrangementCodes(arrangementCodes).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetPackageArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPackageArrangementCodes`: PackageArrangementCodes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetPackageArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPackageArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **arrangementCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **includeInactive** | **bool** | A flag that determines whether to fetch active records or inactive records | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PackageArrangementCodes**](PackageArrangementCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPaymentMethods

> PaymentMethodsInfo GetPaymentMethods(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).TransactionCodes(transactionCodes).PaymentMethods(paymentMethods).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch PaymentMethods.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    transactionCodes := []string{"Inner_example"} // []string |  (optional)
    paymentMethods := []string{"Inner_example"} // []string |  (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple Type for payment method fetch instruction. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetPaymentMethods(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).TransactionCodes(transactionCodes).PaymentMethods(paymentMethods).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetPaymentMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPaymentMethods`: PaymentMethodsInfo
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetPaymentMethods`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPaymentMethodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **transactionCodes** | **[]string** |  | 
 **paymentMethods** | **[]string** |  | 
 **fetchInstructions** | **[]string** | Simple Type for payment method fetch instruction. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PaymentMethodsInfo**](PaymentMethodsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRevenueBucketCodes

> RevenueBucketCodes GetRevenueBucketCodes(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrxCodeArrangementCodes(trxCodeArrangementCodes).WildCard(wildCard).TrxCodeArrangementType(trxCodeArrangementType).Code(code).RevenueBucketTypesWildCard(revenueBucketTypesWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch RevenueBucketCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    trxCodeArrangementCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    trxCodeArrangementType := "trxCodeArrangementType_example" // string | Fiscal Bucket Type. (optional)
    code := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    revenueBucketTypesWildCard := "revenueBucketTypesWildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetRevenueBucketCodes(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrxCodeArrangementCodes(trxCodeArrangementCodes).WildCard(wildCard).TrxCodeArrangementType(trxCodeArrangementType).Code(code).RevenueBucketTypesWildCard(revenueBucketTypesWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetRevenueBucketCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRevenueBucketCodes`: RevenueBucketCodes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetRevenueBucketCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRevenueBucketCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **trxCodeArrangementCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **trxCodeArrangementType** | **string** | Fiscal Bucket Type. | 
 **code** | **[]string** | Codes to be searched. | 
 **revenueBucketTypesWildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RevenueBucketCodes**](RevenueBucketCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRevenueBucketTypes

> RevenueBucketTypes GetRevenueBucketTypes(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueBucketTypeCodes(revenueBucketTypeCodes).WildCard(wildCard).BucketType(bucketType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch RevenueBucketTypes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    revenueBucketTypeCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    bucketType := "bucketType_example" // string | Fiscal Bucket Type. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetRevenueBucketTypes(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueBucketTypeCodes(revenueBucketTypeCodes).WildCard(wildCard).BucketType(bucketType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetRevenueBucketTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRevenueBucketTypes`: RevenueBucketTypes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetRevenueBucketTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRevenueBucketTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **revenueBucketTypeCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **bucketType** | **string** | Fiscal Bucket Type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RevenueBucketTypes**](RevenueBucketTypes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRevenueTypeMapping

> RevenueTypeMappingList GetRevenueTypeMapping(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventTypeCodes(eventTypeCodes).RevenueTypeCodes(revenueTypeCodes).TransactionCodes(transactionCodes).SpaceCodes(spaceCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch RevenueTypeMapping.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | Hotel code.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    eventTypeCodes := []string{"Inner_example"} // []string |  (optional)
    revenueTypeCodes := []string{"Inner_example"} // []string |  (optional)
    transactionCodes := []string{"Inner_example"} // []string |  (optional)
    spaceCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetRevenueTypeMapping(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventTypeCodes(eventTypeCodes).RevenueTypeCodes(revenueTypeCodes).TransactionCodes(transactionCodes).SpaceCodes(spaceCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetRevenueTypeMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRevenueTypeMapping`: RevenueTypeMappingList
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetRevenueTypeMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRevenueTypeMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** | Hotel code. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **eventTypeCodes** | **[]string** |  | 
 **revenueTypeCodes** | **[]string** |  | 
 **transactionCodes** | **[]string** |  | 
 **spaceCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RevenueTypeMappingList**](RevenueTypeMappingList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoutingInstructions

> RoutingInstructions GetRoutingInstructions(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrxCodeArrangementCode(trxCodeArrangementCode).WildCard(wildCard).CompAccounting(compAccounting).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get routing instructions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    trxCodeArrangementCode := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    compAccounting := true // bool | Determines if this is a comp routing code or a routing code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetRoutingInstructions(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrxCodeArrangementCode(trxCodeArrangementCode).WildCard(wildCard).CompAccounting(compAccounting).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetRoutingInstructions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoutingInstructions`: RoutingInstructions
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetRoutingInstructions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRoutingInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **trxCodeArrangementCode** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **compAccounting** | **bool** | Determines if this is a comp routing code or a routing code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoutingInstructions**](RoutingInstructions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTaxBrackets

> TaxBrackets GetTaxBrackets(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxPercentagesCodes(taxPercentagesCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch TaxBrackets.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taxPercentagesCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTaxBrackets(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxPercentagesCodes(taxPercentagesCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTaxBrackets``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTaxBrackets`: TaxBrackets
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTaxBrackets`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTaxBracketsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taxPercentagesCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TaxBrackets**](TaxBrackets.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTaxTypes

> TaxTypes GetTaxTypes(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxTypeCodes(taxTypeCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch TaxTypes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taxTypeCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTaxTypes(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxTypeCodes(taxTypeCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTaxTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTaxTypes`: TaxTypes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTaxTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTaxTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taxTypeCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TaxTypes**](TaxTypes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTemplateCustomNumberConfig

> TemplateCustomNumberConfigDetails GetTemplateCustomNumberConfig(ctx, configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).WildCard(wildCard).StartDate(startDate).EndDate(endDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch template custom number configuration.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    configurationId := "configurationId_example" // string | Unique ID of the configuration
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeInactive := true // bool | Indicator that tells whether to return the inactive custom number configuration in search results. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTemplateCustomNumberConfig(context.Background(), configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).WildCard(wildCard).StartDate(startDate).EndDate(endDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTemplateCustomNumberConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplateCustomNumberConfig`: TemplateCustomNumberConfigDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTemplateCustomNumberConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**configurationId** | **string** | Unique ID of the configuration | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTemplateCustomNumberConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeInactive** | **bool** | Indicator that tells whether to return the inactive custom number configuration in search results. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TemplateCustomNumberConfigDetails**](TemplateCustomNumberConfigDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTemplateCustomNumbers

> TemplateCustomNumberConfigDetails GetTemplateCustomNumbers(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).ConfigurationId(configurationId).WildCard(wildCard).StartDate(startDate).EndDate(endDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch template custom number configuration.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeInactive := true // bool | Indicator that tells whether to return the inactive custom number configuration in search results. (optional)
    configurationId := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTemplateCustomNumbers(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).ConfigurationId(configurationId).WildCard(wildCard).StartDate(startDate).EndDate(endDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTemplateCustomNumbers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplateCustomNumbers`: TemplateCustomNumberConfigDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTemplateCustomNumbers`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTemplateCustomNumbersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeInactive** | **bool** | Indicator that tells whether to return the inactive custom number configuration in search results. | 
 **configurationId** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TemplateCustomNumberConfigDetails**](TemplateCustomNumberConfigDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTemplateTransactionCodes

> TemplateTransactionCodes GetTemplateTransactionCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompTransactionCodes(compTransactionCodes).IncludeInactive(includeInactive).TransactionGroupCodes(transactionGroupCodes).TransactionSubgroupsCodes(transactionSubgroupsCodes).TransactionCodes(transactionCodes).WildCard(wildCard).Description(description).BrandCode(brandCode).UniversalProductCode(universalProductCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get template transaction codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    compTransactionCodes := false // bool | Flag to indicate whether comp accounting transaction codes are being requested. If true, only comp accounting transaction codes will be returned. If false, only standard transaction codes will be returned. (optional)
    includeInactive := false // bool | Inactive flag used to include/exclude inactive transaction codes from the search result (optional)
    transactionGroupCodes := []string{"Inner_example"} // []string |  (optional)
    transactionSubgroupsCodes := []string{"Inner_example"} // []string |  (optional)
    transactionCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the Transaction code. (optional)
    brandCode := "brandCode_example" // string | Property associated with the corporate information brand code in the search criteria (optional)
    universalProductCode := "universalProductCode_example" // string | Unique Universal product code search criteria. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTemplateTransactionCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompTransactionCodes(compTransactionCodes).IncludeInactive(includeInactive).TransactionGroupCodes(transactionGroupCodes).TransactionSubgroupsCodes(transactionSubgroupsCodes).TransactionCodes(transactionCodes).WildCard(wildCard).Description(description).BrandCode(brandCode).UniversalProductCode(universalProductCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTemplateTransactionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplateTransactionCodes`: TemplateTransactionCodes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTemplateTransactionCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTemplateTransactionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **compTransactionCodes** | **bool** | Flag to indicate whether comp accounting transaction codes are being requested. If true, only comp accounting transaction codes will be returned. If false, only standard transaction codes will be returned. | 
 **includeInactive** | **bool** | Inactive flag used to include/exclude inactive transaction codes from the search result | 
 **transactionGroupCodes** | **[]string** |  | 
 **transactionSubgroupsCodes** | **[]string** |  | 
 **transactionCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description of the Transaction code. | 
 **brandCode** | **string** | Property associated with the corporate information brand code in the search criteria | 
 **universalProductCode** | **string** | Unique Universal product code search criteria. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TemplateTransactionCodes**](TemplateTransactionCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTemplateTransactionGroups

> TemplateTransactionGroups GetTemplateTransactionGroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroupCodes(transactionGroupCodes).WildCard(wildCard).TransactionGroupType(transactionGroupType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch TemplateTransactionGroups.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionGroupCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    transactionGroupType := "transactionGroupType_example" // string | Wrapper Transaction Type. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTemplateTransactionGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroupCodes(transactionGroupCodes).WildCard(wildCard).TransactionGroupType(transactionGroupType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTemplateTransactionGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplateTransactionGroups`: TemplateTransactionGroups
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTemplateTransactionGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTemplateTransactionGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionGroupCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **transactionGroupType** | **string** | Wrapper Transaction Type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TemplateTransactionGroups**](TemplateTransactionGroups.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTemplateTransactionSubgroups

> TemplateTransactionSubgroups GetTemplateTransactionSubgroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroupCodes(transactionGroupCodes).TransactionSubgroupsCodes(transactionSubgroupsCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch TemplateTransactionSubgroups.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionGroupCodes := []string{"Inner_example"} // []string |  (optional)
    transactionSubgroupsCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTemplateTransactionSubgroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroupCodes(transactionGroupCodes).TransactionSubgroupsCodes(transactionSubgroupsCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTemplateTransactionSubgroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplateTransactionSubgroups`: TemplateTransactionSubgroups
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTemplateTransactionSubgroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTemplateTransactionSubgroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionGroupCodes** | **[]string** |  | 
 **transactionSubgroupsCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TemplateTransactionSubgroups**](TemplateTransactionSubgroups.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTransactionArrangementCodes

> TransactionArrangementCodes GetTransactionArrangementCodes(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionCodes(transactionCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch TransactionArrangementCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Hotel code for which the transaction codes belong to.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTransactionArrangementCodes(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionCodes(transactionCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTransactionArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTransactionArrangementCodes`: TransactionArrangementCodes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTransactionArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTransactionArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **string** | Hotel code for which the transaction codes belong to. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TransactionArrangementCodes**](TransactionArrangementCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTransactionCode

> HotelTransactionCode GetTransactionCode(ctx, transactionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get transaction codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    transactionCode := "transactionCode_example" // string | Transaction Code in OPERA
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for transaction code instructions that can be used for partial operations. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTransactionCode(context.Background(), transactionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTransactionCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTransactionCode`: HotelTransactionCode
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTransactionCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionCode** | **string** | Transaction Code in OPERA | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTransactionCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInstructions** | **[]string** | Simple type for transaction code instructions that can be used for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HotelTransactionCode**](HotelTransactionCode.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTransactionCodeAccessRoles

> TransactionCodeAccessRoles GetTransactionCodeAccessRoles(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoleCode(roleCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch TransactionCodeAccessRoles.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roleCode := "roleCode_example" // string | Codes (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTransactionCodeAccessRoles(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoleCode(roleCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTransactionCodeAccessRoles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTransactionCodeAccessRoles`: TransactionCodeAccessRoles
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTransactionCodeAccessRoles`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTransactionCodeAccessRolesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roleCode** | **string** | Codes | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TransactionCodeAccessRoles**](TransactionCodeAccessRoles.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTransactionCodes

> HotelTransactionCodes GetTransactionCodes(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompTransactionCodes(compTransactionCodes).IncludeInactive(includeInactive).TransactionGroupCodes(transactionGroupCodes).TransactionSubgroupsCodes(transactionSubgroupsCodes).TransactionCodes(transactionCodes).WildCard(wildCard).Description(description).BrandCode(brandCode).UniversalProductCode(universalProductCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch TransactionCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    compTransactionCodes := false // bool | Flag to indicate whether comp accounting transaction codes are being requested. If true, only comp accounting transaction codes will be returned. If false, only standard transaction codes will be returned. (optional)
    includeInactive := false // bool | Inactive flag used to include/exclude inactive transaction codes from the search result (optional)
    transactionGroupCodes := []string{"Inner_example"} // []string |  (optional)
    transactionSubgroupsCodes := []string{"Inner_example"} // []string |  (optional)
    transactionCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the Transaction code. (optional)
    brandCode := "brandCode_example" // string | Property associated with the corporate information brand code in the search criteria (optional)
    universalProductCode := "universalProductCode_example" // string | Unique Universal product code search criteria. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTransactionCodes(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompTransactionCodes(compTransactionCodes).IncludeInactive(includeInactive).TransactionGroupCodes(transactionGroupCodes).TransactionSubgroupsCodes(transactionSubgroupsCodes).TransactionCodes(transactionCodes).WildCard(wildCard).Description(description).BrandCode(brandCode).UniversalProductCode(universalProductCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTransactionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTransactionCodes`: HotelTransactionCodes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTransactionCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTransactionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **compTransactionCodes** | **bool** | Flag to indicate whether comp accounting transaction codes are being requested. If true, only comp accounting transaction codes will be returned. If false, only standard transaction codes will be returned. | 
 **includeInactive** | **bool** | Inactive flag used to include/exclude inactive transaction codes from the search result | 
 **transactionGroupCodes** | **[]string** |  | 
 **transactionSubgroupsCodes** | **[]string** |  | 
 **transactionCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description of the Transaction code. | 
 **brandCode** | **string** | Property associated with the corporate information brand code in the search criteria | 
 **universalProductCode** | **string** | Unique Universal product code search criteria. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HotelTransactionCodes**](HotelTransactionCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTransactionDiscounts

> TransactionDiscounts GetTransactionDiscounts(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionDiscountCodes(transactionDiscountCodes).Description(description).RuleType(ruleType).MembershipTypes(membershipTypes).MembershipLevels(membershipLevels).FetchInstructions(fetchInstructions).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch TransactionDiscounts.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionDiscountCodes := []string{"Inner_example"} // []string | Discount codes to be searched. (optional)
    description := "description_example" // string | Description text set to the search criteria (optional)
    ruleType := "ruleType_example" // string | The rule type on which the transaction discount is based. (optional)
    membershipTypes := []string{"Inner_example"} // []string | Membership Types set to the search criteria (optional)
    membershipLevels := []string{"Inner_example"} // []string | Membership Levels set to the search criteria (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | When this fetch instruction is passed, the details of article codes and transaction codes attached to the transaction discount are fetched. (optional)
    includeInactive := false // bool | Indicator that tells whether to include inactive transaction discounts in search results. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTransactionDiscounts(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionDiscountCodes(transactionDiscountCodes).Description(description).RuleType(ruleType).MembershipTypes(membershipTypes).MembershipLevels(membershipLevels).FetchInstructions(fetchInstructions).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTransactionDiscounts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTransactionDiscounts`: TransactionDiscounts
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTransactionDiscounts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTransactionDiscountsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionDiscountCodes** | **[]string** | Discount codes to be searched. | 
 **description** | **string** | Description text set to the search criteria | 
 **ruleType** | **string** | The rule type on which the transaction discount is based. | 
 **membershipTypes** | **[]string** | Membership Types set to the search criteria | 
 **membershipLevels** | **[]string** | Membership Levels set to the search criteria | 
 **fetchInstructions** | **[]string** | When this fetch instruction is passed, the details of article codes and transaction codes attached to the transaction discount are fetched. | 
 **includeInactive** | **bool** | Indicator that tells whether to include inactive transaction discounts in search results. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TransactionDiscounts**](TransactionDiscounts.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTransactionDiversionRules

> TransactionDiversionRules GetTransactionDiversionRules(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RuleCodes(ruleCodes).WildCard(wildCard).Type_(type_).Description(description).Level(level).MembershipTypeCodes(membershipTypeCodes).MembershipTypeLevels(membershipTypeLevels).VipCodes(vipCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch TransactionDiversionRules.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ruleCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    type_ := "type__example" // string | The rule type on which the Transaction Diversion Rule is based. If a reservation has any of the following code, Transaction Diversion rule gets active for that reservation (optional)
    description := "description_example" // string | User defined message for the Transaction Diversion Rule. (optional)
    level := "level_example" // string | Reservation level. (optional)
    membershipTypeCodes := []string{"Inner_example"} // []string |  (optional)
    membershipTypeLevels := []string{"Inner_example"} // []string |  (optional)
    vipCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTransactionDiversionRules(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RuleCodes(ruleCodes).WildCard(wildCard).Type_(type_).Description(description).Level(level).MembershipTypeCodes(membershipTypeCodes).MembershipTypeLevels(membershipTypeLevels).VipCodes(vipCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTransactionDiversionRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTransactionDiversionRules`: TransactionDiversionRules
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTransactionDiversionRules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTransactionDiversionRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ruleCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **type_** | **string** | The rule type on which the Transaction Diversion Rule is based. If a reservation has any of the following code, Transaction Diversion rule gets active for that reservation | 
 **description** | **string** | User defined message for the Transaction Diversion Rule. | 
 **level** | **string** | Reservation level. | 
 **membershipTypeCodes** | **[]string** |  | 
 **membershipTypeLevels** | **[]string** |  | 
 **vipCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TransactionDiversionRules**](TransactionDiversionRules.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTransactionGroup

> TransactionGroup GetTransactionGroup(ctx, transactionGroupCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch TransactionGroup.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    transactionGroupCode := "transactionGroupCode_example" // string | Transaction Group Code in OPERA
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for transaction group instructions that can be used for partial operations. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTransactionGroup(context.Background(), transactionGroupCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTransactionGroup``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTransactionGroup`: TransactionGroup
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTransactionGroup`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionGroupCode** | **string** | Transaction Group Code in OPERA | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTransactionGroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInstructions** | **[]string** | Simple type for transaction group instructions that can be used for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TransactionGroup**](TransactionGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTransactionGroups

> TransactionGroups GetTransactionGroups(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroupCodes(transactionGroupCodes).WildCard(wildCard).TransactionGroupType(transactionGroupType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch TransactionGroups.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionGroupCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    transactionGroupType := "transactionGroupType_example" // string | Wrapper Transaction Type. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTransactionGroups(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroupCodes(transactionGroupCodes).WildCard(wildCard).TransactionGroupType(transactionGroupType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTransactionGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTransactionGroups`: TransactionGroups
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTransactionGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTransactionGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionGroupCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **transactionGroupType** | **string** | Wrapper Transaction Type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TransactionGroups**](TransactionGroups.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTransactionSubgroup

> HotelTransactionSubgroup GetTransactionSubgroup(ctx, transactionGroupCode, transactionSubGroupCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch TransactionGroup.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    transactionGroupCode := "transactionGroupCode_example" // string | Transaction Group Code in OPERA
    transactionSubGroupCode := "transactionSubGroupCode_example" // string | Transaction SubGroup Code in OPERA
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for transaction sub group instructions that can be used for partial operations. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTransactionSubgroup(context.Background(), transactionGroupCode, transactionSubGroupCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTransactionSubgroup``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTransactionSubgroup`: HotelTransactionSubgroup
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTransactionSubgroup`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionGroupCode** | **string** | Transaction Group Code in OPERA | 
**transactionSubGroupCode** | **string** | Transaction SubGroup Code in OPERA | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTransactionSubgroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInstructions** | **[]string** | Simple type for transaction sub group instructions that can be used for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HotelTransactionSubgroup**](HotelTransactionSubgroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTransactionSubgroups

> HotelTransactionSubgroups GetTransactionSubgroups(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroupCodes(transactionGroupCodes).TransactionSubgroupsCodes(transactionSubgroupsCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch TransactionSubgroups.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionGroupCodes := []string{"Inner_example"} // []string |  (optional)
    transactionSubgroupsCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTransactionSubgroups(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroupCodes(transactionGroupCodes).TransactionSubgroupsCodes(transactionSubgroupsCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTransactionSubgroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTransactionSubgroups`: HotelTransactionSubgroups
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTransactionSubgroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTransactionSubgroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionGroupCodes** | **[]string** |  | 
 **transactionSubgroupsCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HotelTransactionSubgroups**](HotelTransactionSubgroups.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostAdjustmentCodes

> Status PostAdjustmentCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdjustmentCodes(adjustmentCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create AdjustmentCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    adjustmentCodes := *openapiclient.NewPutAdjustmentCodesRequest() // PutAdjustmentCodesRequest | Request object for creating new Adjustment Code Configurations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostAdjustmentCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdjustmentCodes(adjustmentCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostAdjustmentCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAdjustmentCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostAdjustmentCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostAdjustmentCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **adjustmentCodes** | [**PutAdjustmentCodesRequest**](PutAdjustmentCodesRequest.md) | Request object for creating new Adjustment Code Configurations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostArticles

> Status PostArticles(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Articles(articles).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create Articles.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    articles := *openapiclient.NewPutArticlesRequest() // PutArticlesRequest | Request to create articles.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostArticles(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Articles(articles).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostArticles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostArticles`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostArticles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostArticlesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **articles** | [**PutArticlesRequest**](PutArticlesRequest.md) | Request to create articles. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostAuthorizationConfigRule

> Status PostAuthorizationConfigRule(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizationConfigRules(authorizationConfigRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create AuthorizationConfigRule.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    authorizationConfigRules := *openapiclient.NewPutAuthorizationConfigRuleRequest() // PutAuthorizationConfigRuleRequest | Request object to create new authorization rule for given hotel code.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostAuthorizationConfigRule(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizationConfigRules(authorizationConfigRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostAuthorizationConfigRule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAuthorizationConfigRule`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostAuthorizationConfigRule`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostAuthorizationConfigRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **authorizationConfigRules** | [**PutAuthorizationConfigRuleRequest**](PutAuthorizationConfigRuleRequest.md) | Request object to create new authorization rule for given hotel code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostAuthorizerGroups

> Status PostAuthorizerGroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizerGroups(authorizerGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create AuthorizerGroups.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    authorizerGroups := *openapiclient.NewPostAuthorizerGroupsRequest() // PostAuthorizerGroupsRequest | Request object for creating new Authorizer Group Configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostAuthorizerGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizerGroups(authorizerGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostAuthorizerGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAuthorizerGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostAuthorizerGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostAuthorizerGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **authorizerGroups** | [**PostAuthorizerGroupsRequest**](PostAuthorizerGroupsRequest.md) | Request object for creating new Authorizer Group Configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCashiers

> Status PostCashiers(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Cashiers(cashiers).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create Cashiers.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cashiers := *openapiclient.NewPutCashiersRequest() // PutCashiersRequest | Request object for creating cashiers.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostCashiers(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Cashiers(cashiers).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostCashiers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCashiers`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostCashiers`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostCashiersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cashiers** | [**PutCashiersRequest**](PutCashiersRequest.md) | Request object for creating cashiers. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCollectingAgentTaxes

> Status PostCollectingAgentTaxes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CollectingAgentTaxes(collectingAgentTaxes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create CollectingAgentTaxes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    collectingAgentTaxes := *openapiclient.NewPutCollectingAgentTaxesRequest() // PutCollectingAgentTaxesRequest | Request object to create Collecting Agent Taxes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostCollectingAgentTaxes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CollectingAgentTaxes(collectingAgentTaxes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostCollectingAgentTaxes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCollectingAgentTaxes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostCollectingAgentTaxes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostCollectingAgentTaxesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **collectingAgentTaxes** | [**PutCollectingAgentTaxesRequest**](PutCollectingAgentTaxesRequest.md) | Request object to create Collecting Agent Taxes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCompBucketRedemptionConfig

> Status PostCompBucketRedemptionConfig(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompBucketRedemptionConfig(compBucketRedemptionConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create Comp Bucket Redemption Codes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    compBucketRedemptionConfig := *openapiclient.NewPostCompBucketRedemptionConfigRequest() // PostCompBucketRedemptionConfigRequest | Request object for creating new Comp Bucket Redemption Codes configurations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostCompBucketRedemptionConfig(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompBucketRedemptionConfig(compBucketRedemptionConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostCompBucketRedemptionConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCompBucketRedemptionConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostCompBucketRedemptionConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCompBucketRedemptionConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **compBucketRedemptionConfig** | [**PostCompBucketRedemptionConfigRequest**](PostCompBucketRedemptionConfigRequest.md) | Request object for creating new Comp Bucket Redemption Codes configurations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCompTypes

> Status PostCompTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompTypesCriteria(compTypesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to Create Comp Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    compTypesCriteria := *openapiclient.NewPostCompTypesRequest() // PostCompTypesRequest | Request object for creating CompTypes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostCompTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompTypesCriteria(compTypesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostCompTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCompTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostCompTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostCompTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **compTypesCriteria** | [**PostCompTypesRequest**](PostCompTypesRequest.md) | Request object for creating CompTypes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCurrencyExchangeServiceTaxes

> Status PostCurrencyExchangeServiceTaxes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CurrencyExchangeServiceTaxes(currencyExchangeServiceTaxes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create CurrencyExchangeServiceTaxes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    currencyExchangeServiceTaxes := *openapiclient.NewPutCurrencyExchangeServiceTaxesRequest() // PutCurrencyExchangeServiceTaxesRequest | Request object for creating new currency exchange service taxes
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostCurrencyExchangeServiceTaxes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CurrencyExchangeServiceTaxes(currencyExchangeServiceTaxes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostCurrencyExchangeServiceTaxes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCurrencyExchangeServiceTaxes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostCurrencyExchangeServiceTaxes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostCurrencyExchangeServiceTaxesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **currencyExchangeServiceTaxes** | [**PutCurrencyExchangeServiceTaxesRequest**](PutCurrencyExchangeServiceTaxesRequest.md) | Request object for creating new currency exchange service taxes | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCustomChargeExemptionsConfig

> Status PostCustomChargeExemptionsConfig(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CustomChargeExemptionsConfigToBeCreated(customChargeExemptionsConfigToBeCreated).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create Custom Charge Exemptions Config.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    customChargeExemptionsConfigToBeCreated := *openapiclient.NewPostCustomChargeExemptionsConfigRequest() // PostCustomChargeExemptionsConfigRequest | New one or more Custom Charge Exemptions to be created.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostCustomChargeExemptionsConfig(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CustomChargeExemptionsConfigToBeCreated(customChargeExemptionsConfigToBeCreated).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostCustomChargeExemptionsConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCustomChargeExemptionsConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostCustomChargeExemptionsConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCustomChargeExemptionsConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **customChargeExemptionsConfigToBeCreated** | [**PostCustomChargeExemptionsConfigRequest**](PostCustomChargeExemptionsConfigRequest.md) | New one or more Custom Charge Exemptions to be created. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCustomChargesConfig

> Status PostCustomChargesConfig(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CustomChargesConfig(customChargesConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create Custom Charge Codes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    customChargesConfig := *openapiclient.NewPostCustomChargesConfigRequest() // PostCustomChargesConfigRequest | Request object for creating new Custom Charges.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostCustomChargesConfig(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CustomChargesConfig(customChargesConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostCustomChargesConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCustomChargesConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostCustomChargesConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCustomChargesConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **customChargesConfig** | [**PostCustomChargesConfigRequest**](PostCustomChargesConfigRequest.md) | Request object for creating new Custom Charges. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCustomNumberConfig

> Status PostCustomNumberConfig(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CustomNumberConfiguration(customNumberConfiguration).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create custom number config.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    customNumberConfiguration := *openapiclient.NewPostCustomNumberConfigRequest() // PostCustomNumberConfigRequest | Request object to create custom number configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostCustomNumberConfig(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CustomNumberConfiguration(customNumberConfiguration).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostCustomNumberConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCustomNumberConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostCustomNumberConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCustomNumberConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **customNumberConfiguration** | [**PostCustomNumberConfigRequest**](PostCustomNumberConfigRequest.md) | Request object to create custom number configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostExpenseArrangementCodes

> Status PostExpenseArrangementCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExpenseArrangementCodes(expenseArrangementCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create ExpenseArrangementCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    expenseArrangementCodes := *openapiclient.NewPutExpenseArrangementCodesRequest() // PutExpenseArrangementCodesRequest | Request object for creating new expense arrangement codes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostExpenseArrangementCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExpenseArrangementCodes(expenseArrangementCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostExpenseArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostExpenseArrangementCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostExpenseArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostExpenseArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **expenseArrangementCodes** | [**PutExpenseArrangementCodesRequest**](PutExpenseArrangementCodesRequest.md) | Request object for creating new expense arrangement codes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostFiscalPartners

> Status PostFiscalPartners(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateFiscalPartners(createFiscalPartners).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create fiscal partners



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createFiscalPartners := *openapiclient.NewPostFiscalPartnersRequest() // PostFiscalPartnersRequest | Request object to create Fiscal Partners.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostFiscalPartners(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateFiscalPartners(createFiscalPartners).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostFiscalPartners``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostFiscalPartners`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostFiscalPartners`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostFiscalPartnersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createFiscalPartners** | [**PostFiscalPartnersRequest**](PostFiscalPartnersRequest.md) | Request object to create Fiscal Partners. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostFiscalPeriods

> Status PostFiscalPeriods(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FiscalPeriods(fiscalPeriods).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create FiscalPeriods.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fiscalPeriods := *openapiclient.NewPostFiscalPeriodsRequest() // PostFiscalPeriodsRequest | Request object to create Fiscal Periods
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostFiscalPeriods(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FiscalPeriods(fiscalPeriods).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostFiscalPeriods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostFiscalPeriods`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostFiscalPeriods`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostFiscalPeriodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fiscalPeriods** | [**PostFiscalPeriodsRequest**](PostFiscalPeriodsRequest.md) | Request object to create Fiscal Periods | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostFiscalYears

> Status PostFiscalYears(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FiscalYears(fiscalYears).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create FiscalYears.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fiscalYears := *openapiclient.NewPutFiscalYearsRequest() // PutFiscalYearsRequest | Request object to create Fiscal Years
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostFiscalYears(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FiscalYears(fiscalYears).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostFiscalYears``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostFiscalYears`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostFiscalYears`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostFiscalYearsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fiscalYears** | [**PutFiscalYearsRequest**](PutFiscalYearsRequest.md) | Request object to create Fiscal Years | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostFolioArrangementCodes

> Status PostFolioArrangementCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioArrangementCodes(folioArrangementCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create FolioArrangementCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioArrangementCodes := *openapiclient.NewPutFolioArrangementCodesRequest() // PutFolioArrangementCodesRequest | Request object for creating new folio arrangement codes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostFolioArrangementCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioArrangementCodes(folioArrangementCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostFolioArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostFolioArrangementCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostFolioArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostFolioArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioArrangementCodes** | [**PutFolioArrangementCodesRequest**](PutFolioArrangementCodesRequest.md) | Request object for creating new folio arrangement codes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostFolioPrintQueues

> Status PostFolioPrintQueues(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioPrintQueues(folioPrintQueues).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create FolioPrintQueues.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioPrintQueues := *openapiclient.NewPutFolioPrintQueuesRequest() // PutFolioPrintQueuesRequest | Request object for creating new folio print queues
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostFolioPrintQueues(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioPrintQueues(folioPrintQueues).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostFolioPrintQueues``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostFolioPrintQueues`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostFolioPrintQueues`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostFolioPrintQueuesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioPrintQueues** | [**PutFolioPrintQueuesRequest**](PutFolioPrintQueuesRequest.md) | Request object for creating new folio print queues | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostFolioTypeLegendMappingConfig

> Status PostFolioTypeLegendMappingConfig(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioTypeLegendMappingConfigCriteria(folioTypeLegendMappingConfigCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create folio type legend mappings config.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioTypeLegendMappingConfigCriteria := *openapiclient.NewPostFolioTypeLegendMappingConfigRequest() // PostFolioTypeLegendMappingConfigRequest | Request object to create folio type legend mapping information.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostFolioTypeLegendMappingConfig(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioTypeLegendMappingConfigCriteria(folioTypeLegendMappingConfigCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostFolioTypeLegendMappingConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostFolioTypeLegendMappingConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostFolioTypeLegendMappingConfig`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostFolioTypeLegendMappingConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioTypeLegendMappingConfigCriteria** | [**PostFolioTypeLegendMappingConfigRequest**](PostFolioTypeLegendMappingConfigRequest.md) | Request object to create folio type legend mapping information. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostFolioTypesConfig

> Status PostFolioTypesConfig(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioTypesConfig(folioTypesConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create FolioTypesConfig.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioTypesConfig := *openapiclient.NewPutFolioTypesConfigRequest() // PutFolioTypesConfigRequest | Request object to create Folio Type Name.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostFolioTypesConfig(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioTypesConfig(folioTypesConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostFolioTypesConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostFolioTypesConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostFolioTypesConfig`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostFolioTypesConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioTypesConfig** | [**PutFolioTypesConfigRequest**](PutFolioTypesConfigRequest.md) | Request object to create Folio Type Name. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostForeignCurrencies

> Status PostForeignCurrencies(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ForeignCurrencies(foreignCurrencies).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create ForeignCurrencies.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    foreignCurrencies := *openapiclient.NewPutForeignCurrenciesRequest() // PutForeignCurrenciesRequest | Request object to create Foreign Currencies
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostForeignCurrencies(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ForeignCurrencies(foreignCurrencies).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostForeignCurrencies``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostForeignCurrencies`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostForeignCurrencies`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostForeignCurrenciesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **foreignCurrencies** | [**PutForeignCurrenciesRequest**](PutForeignCurrenciesRequest.md) | Request object to create Foreign Currencies | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostGroupArrangementCodes

> Status PostGroupArrangementCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GroupArrangementCodes(groupArrangementCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create GroupArrangementCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    groupArrangementCodes := *openapiclient.NewPutGroupArrangementCodesRequest() // PutGroupArrangementCodesRequest | Request object for creating new group arrangement codes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostGroupArrangementCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GroupArrangementCodes(groupArrangementCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostGroupArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostGroupArrangementCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostGroupArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostGroupArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **groupArrangementCodes** | [**PutGroupArrangementCodesRequest**](PutGroupArrangementCodesRequest.md) | Request object for creating new group arrangement codes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostNoShowPostingRules

> Status PostNoShowPostingRules(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).NoShowPostingRules(noShowPostingRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create NoShowPostingRules.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    noShowPostingRules := *openapiclient.NewPostNoShowPostingRulesRequest() // PostNoShowPostingRulesRequest | Request object for creating new No Show Posting Rule Configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostNoShowPostingRules(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).NoShowPostingRules(noShowPostingRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostNoShowPostingRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostNoShowPostingRules`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostNoShowPostingRules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostNoShowPostingRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **noShowPostingRules** | [**PostNoShowPostingRulesRequest**](PostNoShowPostingRulesRequest.md) | Request object for creating new No Show Posting Rule Configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostPackageArrangementCodes

> Status PostPackageArrangementCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageArrangementCodes(packageArrangementCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create PackageArrangementCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    packageArrangementCodes := *openapiclient.NewPutPackageArrangementCodesRequest() // PutPackageArrangementCodesRequest | Request object for creating new package arrangement codes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostPackageArrangementCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageArrangementCodes(packageArrangementCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostPackageArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostPackageArrangementCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostPackageArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostPackageArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **packageArrangementCodes** | [**PutPackageArrangementCodesRequest**](PutPackageArrangementCodesRequest.md) | Request object for creating new package arrangement codes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostPaymentMethods

> Status PostPaymentMethods(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PaymentMethods(paymentMethods).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create PaymentMethods.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    paymentMethods := *openapiclient.NewPutPaymentMethodsRequest() // PutPaymentMethodsRequest | Request to create payment methods.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostPaymentMethods(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PaymentMethods(paymentMethods).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostPaymentMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostPaymentMethods`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostPaymentMethods`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostPaymentMethodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **paymentMethods** | [**PutPaymentMethodsRequest**](PutPaymentMethodsRequest.md) | Request to create payment methods. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostRevenueBucketCodes

> Status PostRevenueBucketCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueBucketCodes(revenueBucketCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create RevenueBucketCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    revenueBucketCodes := *openapiclient.NewPutRevenueBucketCodesRequest() // PutRevenueBucketCodesRequest | Request object for creating new Revenue Bucket Codes Configurations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostRevenueBucketCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueBucketCodes(revenueBucketCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostRevenueBucketCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRevenueBucketCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostRevenueBucketCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostRevenueBucketCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **revenueBucketCodes** | [**PutRevenueBucketCodesRequest**](PutRevenueBucketCodesRequest.md) | Request object for creating new Revenue Bucket Codes Configurations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostRevenueBucketTypes

> Status PostRevenueBucketTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueBucketTypes(revenueBucketTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create RevenueBucketTypes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    revenueBucketTypes := *openapiclient.NewPutRevenueBucketTypesRequest() // PutRevenueBucketTypesRequest | Request object for creating new Revenue Bucket Types Configurations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostRevenueBucketTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueBucketTypes(revenueBucketTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostRevenueBucketTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRevenueBucketTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostRevenueBucketTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostRevenueBucketTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **revenueBucketTypes** | [**PutRevenueBucketTypesRequest**](PutRevenueBucketTypesRequest.md) | Request object for creating new Revenue Bucket Types Configurations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostRevenueTypeMapping

> Status PostRevenueTypeMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueTypeMapping(revenueTypeMapping).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Post revenue type mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    revenueTypeMapping := *openapiclient.NewPutRevenueTypeMappingRequest() // PutRevenueTypeMappingRequest | Request object to create Revenue Type Mapping configurations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostRevenueTypeMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueTypeMapping(revenueTypeMapping).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostRevenueTypeMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRevenueTypeMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostRevenueTypeMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostRevenueTypeMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **revenueTypeMapping** | [**PutRevenueTypeMappingRequest**](PutRevenueTypeMappingRequest.md) | Request object to create Revenue Type Mapping configurations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostRoutingInstructions

> Status PostRoutingInstructions(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoutingInstructions(routingInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create RoutingInstructions.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    routingInstructions := *openapiclient.NewPutRoutingInstructionsRequest() // PutRoutingInstructionsRequest | Request to create a routing instruction.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostRoutingInstructions(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoutingInstructions(routingInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostRoutingInstructions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRoutingInstructions`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostRoutingInstructions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostRoutingInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **routingInstructions** | [**PutRoutingInstructionsRequest**](PutRoutingInstructionsRequest.md) | Request to create a routing instruction. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTaxBrackets

> Status PostTaxBrackets(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxBrackets(taxBrackets).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create TaxBrackets.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taxBrackets := *openapiclient.NewPutTaxBracketsRequest() // PutTaxBracketsRequest | Request object for creating tax brackets.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostTaxBrackets(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxBrackets(taxBrackets).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostTaxBrackets``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTaxBrackets`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostTaxBrackets`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTaxBracketsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taxBrackets** | [**PutTaxBracketsRequest**](PutTaxBracketsRequest.md) | Request object for creating tax brackets. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTaxTypes

> Status PostTaxTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxTypes(taxTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create TaxTypes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taxTypes := *openapiclient.NewPutTaxTypesRequest() // PutTaxTypesRequest | Request object for creating new Tax Type Configurations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostTaxTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxTypes(taxTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostTaxTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTaxTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostTaxTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTaxTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taxTypes** | [**PutTaxTypesRequest**](PutTaxTypesRequest.md) | Request object for creating new Tax Type Configurations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTemplateCustomNumber

> Status PostTemplateCustomNumber(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateCustomNumberConfig(templateCustomNumberConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create a new template custom number configuration.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateCustomNumberConfig := *openapiclient.NewPostTemplateCustomNumberConfigRequest() // PostTemplateCustomNumberConfigRequest | Request object to create a new template custom number configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostTemplateCustomNumber(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateCustomNumberConfig(templateCustomNumberConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostTemplateCustomNumber``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTemplateCustomNumber`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostTemplateCustomNumber`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTemplateCustomNumberRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateCustomNumberConfig** | [**PostTemplateCustomNumberConfigRequest**](PostTemplateCustomNumberConfigRequest.md) | Request object to create a new template custom number configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTemplateCustomNumberConfig

> Status PostTemplateCustomNumberConfig(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateCustomNumberConfig(templateCustomNumberConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create a new template custom number configuration.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateCustomNumberConfig := *openapiclient.NewPostTemplateCustomNumberConfigRequest() // PostTemplateCustomNumberConfigRequest | Request object to create a new template custom number configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostTemplateCustomNumberConfig(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateCustomNumberConfig(templateCustomNumberConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostTemplateCustomNumberConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTemplateCustomNumberConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostTemplateCustomNumberConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostTemplateCustomNumberConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateCustomNumberConfig** | [**PostTemplateCustomNumberConfigRequest**](PostTemplateCustomNumberConfigRequest.md) | Request object to create a new template custom number configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTemplateTransactionCodes

> Status PostTemplateTransactionCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateTransactionCodes(templateTransactionCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Post template transaction codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateTransactionCodes := *openapiclient.NewPutTemplateTransactionCodesRequest() // PutTemplateTransactionCodesRequest | Request object for creating new template transaction codes configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostTemplateTransactionCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateTransactionCodes(templateTransactionCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostTemplateTransactionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTemplateTransactionCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostTemplateTransactionCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTemplateTransactionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateTransactionCodes** | [**PutTemplateTransactionCodesRequest**](PutTemplateTransactionCodesRequest.md) | Request object for creating new template transaction codes configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTemplateTransactionGroups

> Status PostTemplateTransactionGroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateTransactionGroups(templateTransactionGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create TemplateTransactionGroups.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateTransactionGroups := *openapiclient.NewPutTemplateTransactionGroupsRequest() // PutTemplateTransactionGroupsRequest | Request object for creating new Template Transaction Groups Configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostTemplateTransactionGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateTransactionGroups(templateTransactionGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostTemplateTransactionGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTemplateTransactionGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostTemplateTransactionGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTemplateTransactionGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateTransactionGroups** | [**PutTemplateTransactionGroupsRequest**](PutTemplateTransactionGroupsRequest.md) | Request object for creating new Template Transaction Groups Configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTemplateTransactionSubgroups

> Status PostTemplateTransactionSubgroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateTransactionSubgroups(templateTransactionSubgroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create TemplateTransactionSubgroups.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateTransactionSubgroups := *openapiclient.NewPutTemplateTransactionSubgroupsRequest() // PutTemplateTransactionSubgroupsRequest | Request object for creating new template transaction subgroups configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostTemplateTransactionSubgroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateTransactionSubgroups(templateTransactionSubgroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostTemplateTransactionSubgroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTemplateTransactionSubgroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostTemplateTransactionSubgroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTemplateTransactionSubgroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateTransactionSubgroups** | [**PutTemplateTransactionSubgroupsRequest**](PutTemplateTransactionSubgroupsRequest.md) | Request object for creating new template transaction subgroups configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTransactionCodes

> Status PostTransactionCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTransactionCodes(hotelTransactionCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Post transaction codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelTransactionCodes := *openapiclient.NewPutTransactionCodesRequest() // PutTransactionCodesRequest | Request object for creating new Transaction Codes Configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostTransactionCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTransactionCodes(hotelTransactionCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostTransactionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTransactionCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostTransactionCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTransactionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelTransactionCodes** | [**PutTransactionCodesRequest**](PutTransactionCodesRequest.md) | Request object for creating new Transaction Codes Configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTransactionDiscounts

> Status PostTransactionDiscounts(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionDiscount(transactionDiscount).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create TransactionDiscounts.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionDiscount := *openapiclient.NewPutTransactionDiscountsRequest() // PutTransactionDiscountsRequest | Request object for creating new Transaction Discount Configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostTransactionDiscounts(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionDiscount(transactionDiscount).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostTransactionDiscounts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTransactionDiscounts`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostTransactionDiscounts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTransactionDiscountsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionDiscount** | [**PutTransactionDiscountsRequest**](PutTransactionDiscountsRequest.md) | Request object for creating new Transaction Discount Configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTransactionDiversionRules

> Status PostTransactionDiversionRules(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionDiversionRules(transactionDiversionRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create TransactionDiversionRules.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionDiversionRules := *openapiclient.NewPutTransactionDiversionRulesRequest() // PutTransactionDiversionRulesRequest | Request object for creating a Transaction Diversion Rule
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostTransactionDiversionRules(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionDiversionRules(transactionDiversionRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostTransactionDiversionRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTransactionDiversionRules`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostTransactionDiversionRules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTransactionDiversionRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionDiversionRules** | [**PutTransactionDiversionRulesRequest**](PutTransactionDiversionRulesRequest.md) | Request object for creating a Transaction Diversion Rule | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTransactionGenerates

> Status PostTransactionGenerates(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTransactionGenerates(hotelTransactionGenerates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Post transaction generates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelTransactionGenerates := *openapiclient.NewPutTransactionGeneratesRequest() // PutTransactionGeneratesRequest | Request to create transaction generates.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostTransactionGenerates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTransactionGenerates(hotelTransactionGenerates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostTransactionGenerates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTransactionGenerates`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostTransactionGenerates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTransactionGeneratesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelTransactionGenerates** | [**PutTransactionGeneratesRequest**](PutTransactionGeneratesRequest.md) | Request to create transaction generates. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTransactionGroups

> Status PostTransactionGroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroups(transactionGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create TransactionGroups.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionGroups := *openapiclient.NewPutTransactionGroupsRequest() // PutTransactionGroupsRequest | Request object for creating new Transaction Groups Configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostTransactionGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroups(transactionGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostTransactionGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTransactionGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostTransactionGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTransactionGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionGroups** | [**PutTransactionGroupsRequest**](PutTransactionGroupsRequest.md) | Request object for creating new Transaction Groups Configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTransactionSubgroups

> Status PostTransactionSubgroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTransactionSubgroups(hotelTransactionSubgroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create TransactionSubgroups.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelTransactionSubgroups := *openapiclient.NewPutTransactionSubgroupsRequest() // PutTransactionSubgroupsRequest | Request object for creating new Transaction Subgroups Configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostTransactionSubgroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTransactionSubgroups(hotelTransactionSubgroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostTransactionSubgroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTransactionSubgroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostTransactionSubgroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTransactionSubgroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelTransactionSubgroups** | [**PutTransactionSubgroupsRequest**](PutTransactionSubgroupsRequest.md) | Request object for creating new Transaction Subgroups Configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutAdjustmentCodes

> Status PutAdjustmentCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdjustmentCodes(adjustmentCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change AdjustmentCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    adjustmentCodes := *openapiclient.NewPutAdjustmentCodesRequest() // PutAdjustmentCodesRequest | Request object for changing existing Adjustment Code Configurations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutAdjustmentCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdjustmentCodes(adjustmentCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutAdjustmentCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAdjustmentCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutAdjustmentCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutAdjustmentCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **adjustmentCodes** | [**PutAdjustmentCodesRequest**](PutAdjustmentCodesRequest.md) | Request object for changing existing Adjustment Code Configurations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutArticles

> Status PutArticles(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Articles(articles).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change Articles.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    articles := *openapiclient.NewPutArticlesRequest() // PutArticlesRequest | Request to change articles.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutArticles(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Articles(articles).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutArticles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutArticles`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutArticles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutArticlesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **articles** | [**PutArticlesRequest**](PutArticlesRequest.md) | Request to change articles. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutAuthorizationConfigRule

> Status PutAuthorizationConfigRule(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizationConfigRules(authorizationConfigRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change AuthorizationConfigRule.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    authorizationConfigRules := *openapiclient.NewPutAuthorizationConfigRuleRequest() // PutAuthorizationConfigRuleRequest | Request object to change authorization rule.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutAuthorizationConfigRule(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizationConfigRules(authorizationConfigRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutAuthorizationConfigRule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAuthorizationConfigRule`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutAuthorizationConfigRule`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutAuthorizationConfigRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **authorizationConfigRules** | [**PutAuthorizationConfigRuleRequest**](PutAuthorizationConfigRuleRequest.md) | Request object to change authorization rule. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutAuthorizerGroups

> Status PutAuthorizerGroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizerGroupsToChange(authorizerGroupsToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change AuthorizerGroups.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    authorizerGroupsToChange := *openapiclient.NewPutAuthorizerGroupsRequest() // PutAuthorizerGroupsRequest | Request object for changing existing Authorizer Group Configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutAuthorizerGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizerGroupsToChange(authorizerGroupsToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutAuthorizerGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAuthorizerGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutAuthorizerGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutAuthorizerGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **authorizerGroupsToChange** | [**PutAuthorizerGroupsRequest**](PutAuthorizerGroupsRequest.md) | Request object for changing existing Authorizer Group Configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutCashiers

> Status PutCashiers(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Cashiers(cashiers).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change CashiersDetails.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cashiers := *openapiclient.NewPutCashiersRequest() // PutCashiersRequest | Request objects for modifying cashiers
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutCashiers(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Cashiers(cashiers).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutCashiers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCashiers`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutCashiers`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutCashiersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cashiers** | [**PutCashiersRequest**](PutCashiersRequest.md) | Request objects for modifying cashiers | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutCollectingAgentTaxes

> Status PutCollectingAgentTaxes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CollectingAgentTaxes(collectingAgentTaxes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change CollectingAgentTaxes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    collectingAgentTaxes := *openapiclient.NewPutCollectingAgentTaxesRequest() // PutCollectingAgentTaxesRequest | Request object to change Collecting Agent Taxes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutCollectingAgentTaxes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CollectingAgentTaxes(collectingAgentTaxes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutCollectingAgentTaxes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCollectingAgentTaxes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutCollectingAgentTaxes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutCollectingAgentTaxesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **collectingAgentTaxes** | [**PutCollectingAgentTaxesRequest**](PutCollectingAgentTaxesRequest.md) | Request object to change Collecting Agent Taxes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutCompBucketRedemptionConfig

> Status PutCompBucketRedemptionConfig(ctx, redemptionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompBucketRedemptionConfig(compBucketRedemptionConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change Comp Bucket Redemption Codes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    redemptionCode := "redemptionCode_example" // string | Bucket Redemption Code
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    compBucketRedemptionConfig := *openapiclient.NewPostCompBucketRedemptionConfigRequest() // PostCompBucketRedemptionConfigRequest | Request object for changing existing Comp Bucket Redemption Codes configurations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutCompBucketRedemptionConfig(context.Background(), redemptionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompBucketRedemptionConfig(compBucketRedemptionConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutCompBucketRedemptionConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCompBucketRedemptionConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutCompBucketRedemptionConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**redemptionCode** | **string** | Bucket Redemption Code | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCompBucketRedemptionConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **compBucketRedemptionConfig** | [**PostCompBucketRedemptionConfigRequest**](PostCompBucketRedemptionConfigRequest.md) | Request object for changing existing Comp Bucket Redemption Codes configurations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutCurrencyExchangeServiceTaxes

> Status PutCurrencyExchangeServiceTaxes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CurrencyExchangeServiceTaxes(currencyExchangeServiceTaxes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change ExchangeServiceTaxes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    currencyExchangeServiceTaxes := *openapiclient.NewPutCurrencyExchangeServiceTaxesRequest() // PutCurrencyExchangeServiceTaxesRequest | Request object for changing currency exchange service taxes
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutCurrencyExchangeServiceTaxes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CurrencyExchangeServiceTaxes(currencyExchangeServiceTaxes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutCurrencyExchangeServiceTaxes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCurrencyExchangeServiceTaxes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutCurrencyExchangeServiceTaxes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutCurrencyExchangeServiceTaxesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **currencyExchangeServiceTaxes** | [**PutCurrencyExchangeServiceTaxesRequest**](PutCurrencyExchangeServiceTaxesRequest.md) | Request object for changing currency exchange service taxes | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutCustomChargeExemptionsConfig

> Status PutCustomChargeExemptionsConfig(ctx, configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CustomChargeExemptionsConfigToBeChanged(customChargeExemptionsConfigToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change Custom Charge Exemptions Config.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    configurationId := "configurationId_example" // string | Unique ID of the configuration
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    customChargeExemptionsConfigToBeChanged := *openapiclient.NewPutCustomChargeExemptionsConfigRequest() // PutCustomChargeExemptionsConfigRequest | Existing Custom Charge Exemptions to be changed.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutCustomChargeExemptionsConfig(context.Background(), configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CustomChargeExemptionsConfigToBeChanged(customChargeExemptionsConfigToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutCustomChargeExemptionsConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCustomChargeExemptionsConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutCustomChargeExemptionsConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**configurationId** | **string** | Unique ID of the configuration | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCustomChargeExemptionsConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **customChargeExemptionsConfigToBeChanged** | [**PutCustomChargeExemptionsConfigRequest**](PutCustomChargeExemptionsConfigRequest.md) | Existing Custom Charge Exemptions to be changed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutCustomChargesConfig

> Status PutCustomChargesConfig(ctx, configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CustomChargesConfig(customChargesConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change Custom Charge Codes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    configurationId := "configurationId_example" // string | Unique ID of the configuration
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    customChargesConfig := *openapiclient.NewPostCustomChargesConfigRequest() // PostCustomChargesConfigRequest | Request object for changing existing Custom Charges.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutCustomChargesConfig(context.Background(), configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CustomChargesConfig(customChargesConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutCustomChargesConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCustomChargesConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutCustomChargesConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**configurationId** | **string** | Unique ID of the configuration | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCustomChargesConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **customChargesConfig** | [**PostCustomChargesConfigRequest**](PostCustomChargesConfigRequest.md) | Request object for changing existing Custom Charges. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutCustomNumberConfig

> Status PutCustomNumberConfig(ctx, configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CustomNumberConfiguration(customNumberConfiguration).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change custom number config.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    configurationId := "configurationId_example" // string | Unique ID of the configuration
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    customNumberConfiguration := *openapiclient.NewPostCustomNumberConfigRequest() // PostCustomNumberConfigRequest | Request object to change custom number configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutCustomNumberConfig(context.Background(), configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CustomNumberConfiguration(customNumberConfiguration).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutCustomNumberConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCustomNumberConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutCustomNumberConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**configurationId** | **string** | Unique ID of the configuration | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCustomNumberConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **customNumberConfiguration** | [**PostCustomNumberConfigRequest**](PostCustomNumberConfigRequest.md) | Request object to change custom number configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutDailyPlanCodes

> Status PutDailyPlanCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DailyPlanCodes(dailyPlanCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change DailyPlanCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    dailyPlanCodes := *openapiclient.NewPutDailyPlanCodesRequest() // PutDailyPlanCodesRequest | Request object for changing daily plan codes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutDailyPlanCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DailyPlanCodes(dailyPlanCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutDailyPlanCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutDailyPlanCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutDailyPlanCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutDailyPlanCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **dailyPlanCodes** | [**PutDailyPlanCodesRequest**](PutDailyPlanCodesRequest.md) | Request object for changing daily plan codes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutExpenseArrangementCodes

> Status PutExpenseArrangementCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExpenseArrangementCodes(expenseArrangementCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change ExpenseArrangementCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    expenseArrangementCodes := *openapiclient.NewPutExpenseArrangementCodesRequest() // PutExpenseArrangementCodesRequest | Request object for changing expense arrangement codes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutExpenseArrangementCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExpenseArrangementCodes(expenseArrangementCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutExpenseArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutExpenseArrangementCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutExpenseArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutExpenseArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **expenseArrangementCodes** | [**PutExpenseArrangementCodesRequest**](PutExpenseArrangementCodesRequest.md) | Request object for changing expense arrangement codes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutFiscalFolioParameters

> Status PutFiscalFolioParameters(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FiscalFolioParameters(fiscalFolioParameters).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change FiscalFolioParameters.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fiscalFolioParameters := *openapiclient.NewPutFiscalFolioParametersRequest() // PutFiscalFolioParametersRequest | Request object for changing existing Fiscal Folio Parameter Configurations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutFiscalFolioParameters(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FiscalFolioParameters(fiscalFolioParameters).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutFiscalFolioParameters``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutFiscalFolioParameters`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutFiscalFolioParameters`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutFiscalFolioParametersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fiscalFolioParameters** | [**PutFiscalFolioParametersRequest**](PutFiscalFolioParametersRequest.md) | Request object for changing existing Fiscal Folio Parameter Configurations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutFiscalPeriods

> Status PutFiscalPeriods(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FiscalPeriodsEdit(fiscalPeriodsEdit).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change FiscalPeriods.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fiscalPeriodsEdit := *openapiclient.NewPutFiscalPeriodsRequest() // PutFiscalPeriodsRequest | Request object to edit Fiscal Periods
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutFiscalPeriods(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FiscalPeriodsEdit(fiscalPeriodsEdit).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutFiscalPeriods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutFiscalPeriods`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutFiscalPeriods`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutFiscalPeriodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fiscalPeriodsEdit** | [**PutFiscalPeriodsRequest**](PutFiscalPeriodsRequest.md) | Request object to edit Fiscal Periods | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutFiscalYears

> Status PutFiscalYears(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FiscalYears(fiscalYears).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change FiscalYears.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fiscalYears := *openapiclient.NewPutFiscalYearsRequest() // PutFiscalYearsRequest | Request object to edit Fiscal Years
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutFiscalYears(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FiscalYears(fiscalYears).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutFiscalYears``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutFiscalYears`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutFiscalYears`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutFiscalYearsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fiscalYears** | [**PutFiscalYearsRequest**](PutFiscalYearsRequest.md) | Request object to edit Fiscal Years | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutFolioArrangementCodes

> Status PutFolioArrangementCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioArrangementCodes(folioArrangementCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change FolioArrangementCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioArrangementCodes := *openapiclient.NewPutFolioArrangementCodesRequest() // PutFolioArrangementCodesRequest | Request object for changing folio arrangement codes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutFolioArrangementCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioArrangementCodes(folioArrangementCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutFolioArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutFolioArrangementCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutFolioArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutFolioArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioArrangementCodes** | [**PutFolioArrangementCodesRequest**](PutFolioArrangementCodesRequest.md) | Request object for changing folio arrangement codes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutFolioCopyLegends

> Status PutFolioCopyLegends(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioCopyLegend(folioCopyLegend).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change FolioCopyLegends.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioCopyLegend := *openapiclient.NewPutFolioCopyLegendsRequest() // PutFolioCopyLegendsRequest | Request object to edit description of folio copy legends
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutFolioCopyLegends(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioCopyLegend(folioCopyLegend).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutFolioCopyLegends``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutFolioCopyLegends`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutFolioCopyLegends`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutFolioCopyLegendsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioCopyLegend** | [**PutFolioCopyLegendsRequest**](PutFolioCopyLegendsRequest.md) | Request object to edit description of folio copy legends | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutFolioPrintQueues

> Status PutFolioPrintQueues(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioPrintQueues(folioPrintQueues).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change FolioPrintQueues.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioPrintQueues := *openapiclient.NewPutFolioPrintQueuesRequest() // PutFolioPrintQueuesRequest | Request object for changing folio print queues
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutFolioPrintQueues(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioPrintQueues(folioPrintQueues).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutFolioPrintQueues``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutFolioPrintQueues`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutFolioPrintQueues`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutFolioPrintQueuesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioPrintQueues** | [**PutFolioPrintQueuesRequest**](PutFolioPrintQueuesRequest.md) | Request object for changing folio print queues | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutFolioTypesConfig

> Status PutFolioTypesConfig(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioTypesConfig(folioTypesConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change FolioTypesConfig.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioTypesConfig := *openapiclient.NewPutFolioTypesConfigRequest() // PutFolioTypesConfigRequest | Request object to change Folio Type Names.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutFolioTypesConfig(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioTypesConfig(folioTypesConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutFolioTypesConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutFolioTypesConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutFolioTypesConfig`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutFolioTypesConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioTypesConfig** | [**PutFolioTypesConfigRequest**](PutFolioTypesConfigRequest.md) | Request object to change Folio Type Names. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutForeignCurrencies

> Status PutForeignCurrencies(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ForeignCurrencies(foreignCurrencies).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change ForeignCurrencies.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    foreignCurrencies := *openapiclient.NewPutForeignCurrenciesRequest() // PutForeignCurrenciesRequest | Request object to edit Foreign Currencies
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutForeignCurrencies(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ForeignCurrencies(foreignCurrencies).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutForeignCurrencies``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutForeignCurrencies`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutForeignCurrencies`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutForeignCurrenciesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **foreignCurrencies** | [**PutForeignCurrenciesRequest**](PutForeignCurrenciesRequest.md) | Request object to edit Foreign Currencies | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutGUINumberRules

> Status PutGUINumberRules(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GUINumberRulesDetails(gUINumberRulesDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change GUINumberRules.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    gUINumberRulesDetails := *openapiclient.NewPutGUINumberRulesRequest() // PutGUINumberRulesRequest | Request object to edit GUI number rules.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutGUINumberRules(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GUINumberRulesDetails(gUINumberRulesDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutGUINumberRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutGUINumberRules`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutGUINumberRules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutGUINumberRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **gUINumberRulesDetails** | [**PutGUINumberRulesRequest**](PutGUINumberRulesRequest.md) | Request object to edit GUI number rules. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutGroupArrangementCodes

> Status PutGroupArrangementCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GroupArrangementCodes(groupArrangementCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change GroupArrangementCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    groupArrangementCodes := *openapiclient.NewPutGroupArrangementCodesRequest() // PutGroupArrangementCodesRequest | Request object for changing group arrangement codes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutGroupArrangementCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GroupArrangementCodes(groupArrangementCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutGroupArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutGroupArrangementCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutGroupArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutGroupArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **groupArrangementCodes** | [**PutGroupArrangementCodesRequest**](PutGroupArrangementCodesRequest.md) | Request object for changing group arrangement codes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutNoShowPostingRules

> Status PutNoShowPostingRules(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).NoShowPostingRulesEdit(noShowPostingRulesEdit).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change NoShowPostingRules.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    noShowPostingRulesEdit := *openapiclient.NewPutNoShowPostingRulesRequest() // PutNoShowPostingRulesRequest | Request object for changing existing No Show Posting Rule Configurations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutNoShowPostingRules(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).NoShowPostingRulesEdit(noShowPostingRulesEdit).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutNoShowPostingRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutNoShowPostingRules`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutNoShowPostingRules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutNoShowPostingRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **noShowPostingRulesEdit** | [**PutNoShowPostingRulesRequest**](PutNoShowPostingRulesRequest.md) | Request object for changing existing No Show Posting Rule Configurations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutNumberDescriptions

> Status PutNumberDescriptions(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).NumberDescriptions(numberDescriptions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change NumberDescriptions.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    numberDescriptions := *openapiclient.NewPutNumberDescriptionsRequest() // PutNumberDescriptionsRequest | Request object to edit description of numbers
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutNumberDescriptions(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).NumberDescriptions(numberDescriptions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutNumberDescriptions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutNumberDescriptions`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutNumberDescriptions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutNumberDescriptionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **numberDescriptions** | [**PutNumberDescriptionsRequest**](PutNumberDescriptionsRequest.md) | Request object to edit description of numbers | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutOperaControlSequences

> Status PutOperaControlSequences(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OperaControlSequences(operaControlSequences).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change OperaControlSequences.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    operaControlSequences := *openapiclient.NewPutOperaControlSequencesRequest() // PutOperaControlSequencesRequest | Request objects for updating Opera Control Sequences
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutOperaControlSequences(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OperaControlSequences(operaControlSequences).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutOperaControlSequences``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutOperaControlSequences`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutOperaControlSequences`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutOperaControlSequencesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **operaControlSequences** | [**PutOperaControlSequencesRequest**](PutOperaControlSequencesRequest.md) | Request objects for updating Opera Control Sequences | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutPackageArrangementCodes

> Status PutPackageArrangementCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageArrangementCodes(packageArrangementCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change PackageArrangementCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    packageArrangementCodes := *openapiclient.NewPutPackageArrangementCodesRequest() // PutPackageArrangementCodesRequest | Request object for changing package arrangement codes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutPackageArrangementCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageArrangementCodes(packageArrangementCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutPackageArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutPackageArrangementCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutPackageArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutPackageArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **packageArrangementCodes** | [**PutPackageArrangementCodesRequest**](PutPackageArrangementCodesRequest.md) | Request object for changing package arrangement codes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutPaymentMethods

> Status PutPaymentMethods(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PaymentMethods(paymentMethods).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change PaymentMethods.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    paymentMethods := *openapiclient.NewPutPaymentMethodsRequest() // PutPaymentMethodsRequest | Request to change payment methods.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutPaymentMethods(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PaymentMethods(paymentMethods).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutPaymentMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutPaymentMethods`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutPaymentMethods`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutPaymentMethodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **paymentMethods** | [**PutPaymentMethodsRequest**](PutPaymentMethodsRequest.md) | Request to change payment methods. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutRevenueBucketCodes

> Status PutRevenueBucketCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueBucketCodes(revenueBucketCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change RevenueBucketCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    revenueBucketCodes := *openapiclient.NewPutRevenueBucketCodesRequest() // PutRevenueBucketCodesRequest | Request object for changing existing Revenue Bucket Codes Configurations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutRevenueBucketCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueBucketCodes(revenueBucketCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutRevenueBucketCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRevenueBucketCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutRevenueBucketCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutRevenueBucketCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **revenueBucketCodes** | [**PutRevenueBucketCodesRequest**](PutRevenueBucketCodesRequest.md) | Request object for changing existing Revenue Bucket Codes Configurations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutRevenueBucketTypes

> Status PutRevenueBucketTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueBucketTypes(revenueBucketTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change RevenueBucketTypes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    revenueBucketTypes := *openapiclient.NewPutRevenueBucketTypesRequest() // PutRevenueBucketTypesRequest | Request object for changing existing Revenue Bucket Types Configurations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutRevenueBucketTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueBucketTypes(revenueBucketTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutRevenueBucketTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRevenueBucketTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutRevenueBucketTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutRevenueBucketTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **revenueBucketTypes** | [**PutRevenueBucketTypesRequest**](PutRevenueBucketTypesRequest.md) | Request object for changing existing Revenue Bucket Types Configurations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutRevenueTypeMapping

> Status PutRevenueTypeMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueTypeMapping(revenueTypeMapping).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change RevenueTypeMapping.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    revenueTypeMapping := *openapiclient.NewPutRevenueTypeMappingRequest() // PutRevenueTypeMappingRequest | Request object to change Revenue Type Mapping configurations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutRevenueTypeMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueTypeMapping(revenueTypeMapping).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutRevenueTypeMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRevenueTypeMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutRevenueTypeMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutRevenueTypeMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **revenueTypeMapping** | [**PutRevenueTypeMappingRequest**](PutRevenueTypeMappingRequest.md) | Request object to change Revenue Type Mapping configurations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutRoutingInstructions

> Status PutRoutingInstructions(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoutingInstructions(routingInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change RoutingInstructions.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    routingInstructions := *openapiclient.NewPutRoutingInstructionsRequest() // PutRoutingInstructionsRequest | Request when changing a routing instruction.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutRoutingInstructions(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoutingInstructions(routingInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutRoutingInstructions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoutingInstructions`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutRoutingInstructions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutRoutingInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **routingInstructions** | [**PutRoutingInstructionsRequest**](PutRoutingInstructionsRequest.md) | Request when changing a routing instruction. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutTaxBrackets

> Status PutTaxBrackets(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxBrackets(taxBrackets).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change TaxBrackets.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taxBrackets := *openapiclient.NewPutTaxBracketsRequest() // PutTaxBracketsRequest | Request object for changing tax brackets.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutTaxBrackets(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxBrackets(taxBrackets).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutTaxBrackets``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTaxBrackets`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutTaxBrackets`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutTaxBracketsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taxBrackets** | [**PutTaxBracketsRequest**](PutTaxBracketsRequest.md) | Request object for changing tax brackets. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutTaxTypes

> Status PutTaxTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxTypes(taxTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change TaxTypes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taxTypes := *openapiclient.NewPutTaxTypesRequest() // PutTaxTypesRequest | Request object for changing existing Tax Type Configurations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutTaxTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxTypes(taxTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutTaxTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTaxTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutTaxTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutTaxTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taxTypes** | [**PutTaxTypesRequest**](PutTaxTypesRequest.md) | Request object for changing existing Tax Type Configurations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutTemplateCustomNumber

> Status PutTemplateCustomNumber(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateCustomNumberConfig(templateCustomNumberConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change template custom number configuration.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateCustomNumberConfig := *openapiclient.NewPostTemplateCustomNumberConfigRequest() // PostTemplateCustomNumberConfigRequest | Request object to change template custom number configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutTemplateCustomNumber(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateCustomNumberConfig(templateCustomNumberConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutTemplateCustomNumber``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTemplateCustomNumber`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutTemplateCustomNumber`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutTemplateCustomNumberRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateCustomNumberConfig** | [**PostTemplateCustomNumberConfigRequest**](PostTemplateCustomNumberConfigRequest.md) | Request object to change template custom number configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutTemplateCustomNumberConfig

> Status PutTemplateCustomNumberConfig(ctx, configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateCustomNumberConfig(templateCustomNumberConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change template custom number configuration.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    configurationId := "configurationId_example" // string | Unique ID of the configuration
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateCustomNumberConfig := *openapiclient.NewPostTemplateCustomNumberConfigRequest() // PostTemplateCustomNumberConfigRequest | Request object to change template custom number configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutTemplateCustomNumberConfig(context.Background(), configurationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateCustomNumberConfig(templateCustomNumberConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutTemplateCustomNumberConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTemplateCustomNumberConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutTemplateCustomNumberConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**configurationId** | **string** | Unique ID of the configuration | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutTemplateCustomNumberConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateCustomNumberConfig** | [**PostTemplateCustomNumberConfigRequest**](PostTemplateCustomNumberConfigRequest.md) | Request object to change template custom number configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutTemplateTransactionCodes

> Status PutTemplateTransactionCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateTransactionCodes(templateTransactionCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change TemplateTransactionCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateTransactionCodes := *openapiclient.NewPutTemplateTransactionCodesRequest() // PutTemplateTransactionCodesRequest | Request object for changing existing template transaction codes configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutTemplateTransactionCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateTransactionCodes(templateTransactionCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutTemplateTransactionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTemplateTransactionCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutTemplateTransactionCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutTemplateTransactionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateTransactionCodes** | [**PutTemplateTransactionCodesRequest**](PutTemplateTransactionCodesRequest.md) | Request object for changing existing template transaction codes configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutTemplateTransactionGroups

> Status PutTemplateTransactionGroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateTransactionGroups(templateTransactionGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change TemplateTransactionGroups.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateTransactionGroups := *openapiclient.NewPutTemplateTransactionGroupsRequest() // PutTemplateTransactionGroupsRequest | Request object to changing Template Transaction Groups Configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutTemplateTransactionGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateTransactionGroups(templateTransactionGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutTemplateTransactionGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTemplateTransactionGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutTemplateTransactionGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutTemplateTransactionGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateTransactionGroups** | [**PutTemplateTransactionGroupsRequest**](PutTemplateTransactionGroupsRequest.md) | Request object to changing Template Transaction Groups Configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutTemplateTransactionSubgroups

> Status PutTemplateTransactionSubgroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateTransactionSubgroups(templateTransactionSubgroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change TemplateTransactionSubgroups.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateTransactionSubgroups := *openapiclient.NewPutTemplateTransactionSubgroupsRequest() // PutTemplateTransactionSubgroupsRequest | Request object for changing existing template transaction subgroups configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutTemplateTransactionSubgroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateTransactionSubgroups(templateTransactionSubgroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutTemplateTransactionSubgroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTemplateTransactionSubgroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutTemplateTransactionSubgroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutTemplateTransactionSubgroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateTransactionSubgroups** | [**PutTemplateTransactionSubgroupsRequest**](PutTemplateTransactionSubgroupsRequest.md) | Request object for changing existing template transaction subgroups configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutTransactionCodeOwnership

> Status PutTransactionCodeOwnership(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionCodeOwnership(transactionCodeOwnership).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change TransactionCodeOwnership.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionCodeOwnership := *openapiclient.NewPutTransactionCodeOwnershipRequest() // PutTransactionCodeOwnershipRequest | Request object for changing ownership of selected transaction codes operation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutTransactionCodeOwnership(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionCodeOwnership(transactionCodeOwnership).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutTransactionCodeOwnership``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTransactionCodeOwnership`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutTransactionCodeOwnership`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutTransactionCodeOwnershipRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionCodeOwnership** | [**PutTransactionCodeOwnershipRequest**](PutTransactionCodeOwnershipRequest.md) | Request object for changing ownership of selected transaction codes operation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutTransactionCodes

> TransactionCodes PutTransactionCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTransactionCodes(hotelTransactionCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Put transaction codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelTransactionCodes := *openapiclient.NewPutTransactionCodesRequest() // PutTransactionCodesRequest | Request object for changing existing Transaction Codes Configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutTransactionCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTransactionCodes(hotelTransactionCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutTransactionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTransactionCodes`: TransactionCodes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutTransactionCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutTransactionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelTransactionCodes** | [**PutTransactionCodesRequest**](PutTransactionCodesRequest.md) | Request object for changing existing Transaction Codes Configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TransactionCodes**](TransactionCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutTransactionDiscounts

> Status PutTransactionDiscounts(ctx, hotelId, transactionDiscountCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionDiscount(transactionDiscount).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change TransactionDiscounts.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    transactionDiscountCode := "transactionDiscountCode_example" // string | Unique code for transaction discount
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionDiscount := *openapiclient.NewPutTransactionDiscountsRequest() // PutTransactionDiscountsRequest | Request object for changing a Transaction Discount Configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutTransactionDiscounts(context.Background(), hotelId, transactionDiscountCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionDiscount(transactionDiscount).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutTransactionDiscounts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTransactionDiscounts`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutTransactionDiscounts`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 
**transactionDiscountCode** | **string** | Unique code for transaction discount | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutTransactionDiscountsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionDiscount** | [**PutTransactionDiscountsRequest**](PutTransactionDiscountsRequest.md) | Request object for changing a Transaction Discount Configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutTransactionDiversionRules

> Status PutTransactionDiversionRules(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionDiversionRules(transactionDiversionRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change TransactionDiversionRules.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionDiversionRules := *openapiclient.NewPutTransactionDiversionRulesRequest() // PutTransactionDiversionRulesRequest | Request object for modifying an existing Transaction Diversion Rule
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutTransactionDiversionRules(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionDiversionRules(transactionDiversionRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutTransactionDiversionRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTransactionDiversionRules`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutTransactionDiversionRules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutTransactionDiversionRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionDiversionRules** | [**PutTransactionDiversionRulesRequest**](PutTransactionDiversionRulesRequest.md) | Request object for modifying an existing Transaction Diversion Rule | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutTransactionGenerates

> Status PutTransactionGenerates(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTransactionGenerates(hotelTransactionGenerates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Put transaction generates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelTransactionGenerates := *openapiclient.NewPutTransactionGeneratesRequest() // PutTransactionGeneratesRequest | Request to change transaction generates.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutTransactionGenerates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTransactionGenerates(hotelTransactionGenerates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutTransactionGenerates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTransactionGenerates`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutTransactionGenerates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutTransactionGeneratesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelTransactionGenerates** | [**PutTransactionGeneratesRequest**](PutTransactionGeneratesRequest.md) | Request to change transaction generates. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutTransactionGroups

> Status PutTransactionGroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroups(transactionGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change TransactionGroups.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionGroups := *openapiclient.NewPutTransactionGroupsRequest() // PutTransactionGroupsRequest | Request object for changing existing Transaction Groups Configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutTransactionGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroups(transactionGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutTransactionGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTransactionGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutTransactionGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutTransactionGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionGroups** | [**PutTransactionGroupsRequest**](PutTransactionGroupsRequest.md) | Request object for changing existing Transaction Groups Configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutTransactionSubgroups

> Status PutTransactionSubgroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTransactionSubgroups(hotelTransactionSubgroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change TransactionSubgroups.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelTransactionSubgroups := *openapiclient.NewPutTransactionSubgroupsRequest() // PutTransactionSubgroupsRequest | Request object for changing existing Transaction Subgroups Configuration.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutTransactionSubgroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTransactionSubgroups(hotelTransactionSubgroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutTransactionSubgroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTransactionSubgroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutTransactionSubgroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutTransactionSubgroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelTransactionSubgroups** | [**PutTransactionSubgroupsRequest**](PutTransactionSubgroupsRequest.md) | Request object for changing existing Transaction Subgroups Configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveCompTypes

> Status RemoveCompTypes(ctx, compTypesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to Remove Comp Types.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    compTypesCode := "compTypesCode_example" // string | Comp Types Code to be deleted.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.RemoveCompTypes(context.Background(), compTypesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.RemoveCompTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveCompTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.RemoveCompTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**compTypesCode** | **string** | Comp Types Code to be deleted. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveCompTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveFiscalPartners

> Status RemoveFiscalPartners(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PartnerCode(partnerCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete configuration fiscal partners



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    partnerCode := []string{"Inner_example"} // []string | Used for fiscal partner codes. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.RemoveFiscalPartners(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PartnerCode(partnerCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.RemoveFiscalPartners``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveFiscalPartners`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.RemoveFiscalPartners`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveFiscalPartnersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **partnerCode** | **[]string** | Used for fiscal partner codes. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveFolioTypeLegendMappingConfig

> Status RemoveFolioTypeLegendMappingConfig(ctx, legendCode, folioType, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove folio type legend mappings config.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    legendCode := "legendCode_example" // string | Legend Code
    folioType := "folioType_example" // string | Folio Type
    hotelId := "hotelId_example" // string | Unique ID of the source hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.RemoveFolioTypeLegendMappingConfig(context.Background(), legendCode, folioType, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.RemoveFolioTypeLegendMappingConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveFolioTypeLegendMappingConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.RemoveFolioTypeLegendMappingConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**legendCode** | **string** | Legend Code | 
**folioType** | **string** | Folio Type | 
**hotelId** | **string** | Unique ID of the source hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveFolioTypeLegendMappingConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemovePaymentMethods

> Status RemovePaymentMethods(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PaymentMethods(paymentMethods).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete TransactionArrangementCodes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    paymentMethods := *openapiclient.NewPutPaymentMethodsRequest() // PutPaymentMethodsRequest | Request to remove payment methods.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.RemovePaymentMethods(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PaymentMethods(paymentMethods).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.RemovePaymentMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemovePaymentMethods`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.RemovePaymentMethods`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRemovePaymentMethodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **paymentMethods** | [**PutPaymentMethodsRequest**](PutPaymentMethodsRequest.md) | Request to remove payment methods. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveTransactionDiversionRules

> Status RemoveTransactionDiversionRules(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionDiversionRules(transactionDiversionRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete TransactionDiversionRules.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionDiversionRules := *openapiclient.NewPutTransactionDiversionRulesRequest() // PutTransactionDiversionRulesRequest | Request object for deleting an existing Transaction Diversion Rule
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.RemoveTransactionDiversionRules(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionDiversionRules(transactionDiversionRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.RemoveTransactionDiversionRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveTransactionDiversionRules`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.RemoveTransactionDiversionRules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRemoveTransactionDiversionRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionDiversionRules** | [**PutTransactionDiversionRulesRequest**](PutTransactionDiversionRulesRequest.md) | Request object for deleting an existing Transaction Diversion Rule | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveTransactionGenerates

> Status RemoveTransactionGenerates(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTransactionGenerates(hotelTransactionGenerates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete TransactionGenerates.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelTransactionGenerates := *openapiclient.NewPutTransactionGeneratesRequest() // PutTransactionGeneratesRequest | Request to remove transaction generates.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.RemoveTransactionGenerates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTransactionGenerates(hotelTransactionGenerates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.RemoveTransactionGenerates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveTransactionGenerates`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.RemoveTransactionGenerates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRemoveTransactionGeneratesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelTransactionGenerates** | [**PutTransactionGeneratesRequest**](PutTransactionGeneratesRequest.md) | Request to remove transaction generates. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SetBudgetForecast

> Status SetBudgetForecast(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BudgetForecastInformationBase(budgetForecastInformationBase).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to set BudgetForecast.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    budgetForecastInformationBase := *openapiclient.NewSetBudgetForecastRequest() // SetBudgetForecastRequest | Request to load the Budget or Forecast information.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.SetBudgetForecast(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BudgetForecastInformationBase(budgetForecastInformationBase).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.SetBudgetForecast``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetBudgetForecast`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.SetBudgetForecast`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetBudgetForecastRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **budgetForecastInformationBase** | [**SetBudgetForecastRequest**](SetBudgetForecastRequest.md) | Request to load the Budget or Forecast information. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SetCompAuthorizer

> Status SetCompAuthorizer(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompAuthorizer(compAuthorizer).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to set CompAuthorizer.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    compAuthorizer := *openapiclient.NewSetCompAuthorizerRequest() // SetCompAuthorizerRequest | Retrieve a summary of transactions for a guest or a set of guests.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.SetCompAuthorizer(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompAuthorizer(compAuthorizer).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.SetCompAuthorizer``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetCompAuthorizer`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.SetCompAuthorizer`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetCompAuthorizerRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **compAuthorizer** | [**SetCompAuthorizerRequest**](SetCompAuthorizerRequest.md) | Retrieve a summary of transactions for a guest or a set of guests. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SetExchangeRates

> Status SetExchangeRates(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExchangeRates(exchangeRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to set ExchangeRates.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    exchangeRates := *openapiclient.NewDeleteExchangeRatesRequest() // DeleteExchangeRatesRequest | Exchange Rates to be Set.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.SetExchangeRates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExchangeRates(exchangeRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.SetExchangeRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetExchangeRates`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.SetExchangeRates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetExchangeRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **exchangeRates** | [**DeleteExchangeRatesRequest**](DeleteExchangeRatesRequest.md) | Exchange Rates to be Set. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SetGlobalExchangeRates

> Status SetGlobalExchangeRates(ctx).Authorization(authorization).XAppKey(xAppKey).ExchangeRates(exchangeRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to set GlobalExchangeRates.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    exchangeRates := *openapiclient.NewDeleteExchangeRatesRequest() // DeleteExchangeRatesRequest | Exchange Rates to be Set.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.SetGlobalExchangeRates(context.Background()).Authorization(authorization).XAppKey(xAppKey).ExchangeRates(exchangeRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.SetGlobalExchangeRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetGlobalExchangeRates`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.SetGlobalExchangeRates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetGlobalExchangeRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **exchangeRates** | [**DeleteExchangeRatesRequest**](DeleteExchangeRatesRequest.md) | Exchange Rates to be Set. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SetTransactionCodeAccessRoles

> Status SetTransactionCodeAccessRoles(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionCodeAccessRoles(transactionCodeAccessRoles).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to set TransactionCodeAccessRoles.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionCodeAccessRoles := *openapiclient.NewSetTransactionCodeAccessRolesRequest() // SetTransactionCodeAccessRolesRequest | Request object for Setting a Transaction Code Access Roles
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.SetTransactionCodeAccessRoles(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionCodeAccessRoles(transactionCodeAccessRoles).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.SetTransactionCodeAccessRoles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetTransactionCodeAccessRoles`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.SetTransactionCodeAccessRoles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetTransactionCodeAccessRolesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionCodeAccessRoles** | [**SetTransactionCodeAccessRolesRequest**](SetTransactionCodeAccessRolesRequest.md) | Request object for Setting a Transaction Code Access Roles | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

