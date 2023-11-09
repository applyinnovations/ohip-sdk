# ConfigPostingAttributesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddToRate** | Pointer to **bool** | The package price is added to the functionSpaceDetails rate. | [optional] 
**CalculatedPrice** | Pointer to **float32** | Calculated Package Price based from Number of Adults, Children and Calculation Rule. | [optional] 
**Catering** | Pointer to **bool** | Is package used for catering? | [optional] 
**DeliveryTimeRequired** | Pointer to **bool** | Indicates whether a delivery time is required for the package. | [optional] 
**EndTime** | Pointer to **string** | End time the package is valid. | [optional] 
**ForecastNextDay** | Pointer to **bool** | Package will be forecasted for consumption the next business day. | [optional] 
**Formula** | Pointer to **string** | The custom formula used for this package, if any. | [optional] 
**FormulaFunctionArguments** | Pointer to [**FunctionArgumentsType**](FunctionArgumentsType.md) |  | [optional] 
**FormulaFunctionName** | Pointer to **string** | The custom formula function name used for this package, if any. | [optional] 
**InventoryItems** | Pointer to [**[]PkgInventoryItemType**](PkgInventoryItemType.md) | Package Code Inventory Items type. | [optional] 
**PostNextDay** | Pointer to **bool** | package charges will be posted next business day. | [optional] 
**PostingRhythm** | Pointer to [**PackagePostingRhythmType**](PackagePostingRhythmType.md) |  | [optional] 
**PriceCalculationRule** | Pointer to [**PackageCalculationRuleType**](PackageCalculationRuleType.md) |  | [optional] 
**PrintSeparateLine** | Pointer to **bool** | The package price is printed on separate line of the folio. | [optional] 
**SellSeparate** | Pointer to **bool** | Can the package be sold separate from rate plan code? | [optional] 
**StartTime** | Pointer to **string** | Start time the package is valid. | [optional] 
**Ticket** | Pointer to **bool** | Indicates whether a package is configured as a ticket or not. | [optional] 
**WebBookable** | Pointer to **bool** | Can package be sold via Web channel. | [optional] 

## Methods

### NewConfigPostingAttributesType

`func NewConfigPostingAttributesType() *ConfigPostingAttributesType`

NewConfigPostingAttributesType instantiates a new ConfigPostingAttributesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigPostingAttributesTypeWithDefaults

`func NewConfigPostingAttributesTypeWithDefaults() *ConfigPostingAttributesType`

NewConfigPostingAttributesTypeWithDefaults instantiates a new ConfigPostingAttributesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddToRate

`func (o *ConfigPostingAttributesType) GetAddToRate() bool`

GetAddToRate returns the AddToRate field if non-nil, zero value otherwise.

### GetAddToRateOk

`func (o *ConfigPostingAttributesType) GetAddToRateOk() (*bool, bool)`

GetAddToRateOk returns a tuple with the AddToRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddToRate

`func (o *ConfigPostingAttributesType) SetAddToRate(v bool)`

SetAddToRate sets AddToRate field to given value.

### HasAddToRate

`func (o *ConfigPostingAttributesType) HasAddToRate() bool`

HasAddToRate returns a boolean if a field has been set.

### GetCalculatedPrice

`func (o *ConfigPostingAttributesType) GetCalculatedPrice() float32`

GetCalculatedPrice returns the CalculatedPrice field if non-nil, zero value otherwise.

### GetCalculatedPriceOk

`func (o *ConfigPostingAttributesType) GetCalculatedPriceOk() (*float32, bool)`

GetCalculatedPriceOk returns a tuple with the CalculatedPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculatedPrice

`func (o *ConfigPostingAttributesType) SetCalculatedPrice(v float32)`

SetCalculatedPrice sets CalculatedPrice field to given value.

### HasCalculatedPrice

`func (o *ConfigPostingAttributesType) HasCalculatedPrice() bool`

HasCalculatedPrice returns a boolean if a field has been set.

### GetCatering

`func (o *ConfigPostingAttributesType) GetCatering() bool`

GetCatering returns the Catering field if non-nil, zero value otherwise.

### GetCateringOk

`func (o *ConfigPostingAttributesType) GetCateringOk() (*bool, bool)`

GetCateringOk returns a tuple with the Catering field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatering

`func (o *ConfigPostingAttributesType) SetCatering(v bool)`

SetCatering sets Catering field to given value.

### HasCatering

`func (o *ConfigPostingAttributesType) HasCatering() bool`

HasCatering returns a boolean if a field has been set.

### GetDeliveryTimeRequired

`func (o *ConfigPostingAttributesType) GetDeliveryTimeRequired() bool`

GetDeliveryTimeRequired returns the DeliveryTimeRequired field if non-nil, zero value otherwise.

### GetDeliveryTimeRequiredOk

`func (o *ConfigPostingAttributesType) GetDeliveryTimeRequiredOk() (*bool, bool)`

GetDeliveryTimeRequiredOk returns a tuple with the DeliveryTimeRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryTimeRequired

`func (o *ConfigPostingAttributesType) SetDeliveryTimeRequired(v bool)`

SetDeliveryTimeRequired sets DeliveryTimeRequired field to given value.

### HasDeliveryTimeRequired

`func (o *ConfigPostingAttributesType) HasDeliveryTimeRequired() bool`

HasDeliveryTimeRequired returns a boolean if a field has been set.

### GetEndTime

`func (o *ConfigPostingAttributesType) GetEndTime() string`

GetEndTime returns the EndTime field if non-nil, zero value otherwise.

### GetEndTimeOk

`func (o *ConfigPostingAttributesType) GetEndTimeOk() (*string, bool)`

GetEndTimeOk returns a tuple with the EndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndTime

`func (o *ConfigPostingAttributesType) SetEndTime(v string)`

SetEndTime sets EndTime field to given value.

### HasEndTime

`func (o *ConfigPostingAttributesType) HasEndTime() bool`

HasEndTime returns a boolean if a field has been set.

### GetForecastNextDay

`func (o *ConfigPostingAttributesType) GetForecastNextDay() bool`

GetForecastNextDay returns the ForecastNextDay field if non-nil, zero value otherwise.

### GetForecastNextDayOk

`func (o *ConfigPostingAttributesType) GetForecastNextDayOk() (*bool, bool)`

GetForecastNextDayOk returns a tuple with the ForecastNextDay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForecastNextDay

`func (o *ConfigPostingAttributesType) SetForecastNextDay(v bool)`

SetForecastNextDay sets ForecastNextDay field to given value.

### HasForecastNextDay

`func (o *ConfigPostingAttributesType) HasForecastNextDay() bool`

HasForecastNextDay returns a boolean if a field has been set.

### GetFormula

`func (o *ConfigPostingAttributesType) GetFormula() string`

GetFormula returns the Formula field if non-nil, zero value otherwise.

### GetFormulaOk

`func (o *ConfigPostingAttributesType) GetFormulaOk() (*string, bool)`

GetFormulaOk returns a tuple with the Formula field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormula

`func (o *ConfigPostingAttributesType) SetFormula(v string)`

SetFormula sets Formula field to given value.

### HasFormula

`func (o *ConfigPostingAttributesType) HasFormula() bool`

HasFormula returns a boolean if a field has been set.

### GetFormulaFunctionArguments

`func (o *ConfigPostingAttributesType) GetFormulaFunctionArguments() FunctionArgumentsType`

GetFormulaFunctionArguments returns the FormulaFunctionArguments field if non-nil, zero value otherwise.

### GetFormulaFunctionArgumentsOk

`func (o *ConfigPostingAttributesType) GetFormulaFunctionArgumentsOk() (*FunctionArgumentsType, bool)`

GetFormulaFunctionArgumentsOk returns a tuple with the FormulaFunctionArguments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormulaFunctionArguments

`func (o *ConfigPostingAttributesType) SetFormulaFunctionArguments(v FunctionArgumentsType)`

SetFormulaFunctionArguments sets FormulaFunctionArguments field to given value.

### HasFormulaFunctionArguments

`func (o *ConfigPostingAttributesType) HasFormulaFunctionArguments() bool`

HasFormulaFunctionArguments returns a boolean if a field has been set.

### GetFormulaFunctionName

`func (o *ConfigPostingAttributesType) GetFormulaFunctionName() string`

GetFormulaFunctionName returns the FormulaFunctionName field if non-nil, zero value otherwise.

### GetFormulaFunctionNameOk

`func (o *ConfigPostingAttributesType) GetFormulaFunctionNameOk() (*string, bool)`

GetFormulaFunctionNameOk returns a tuple with the FormulaFunctionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormulaFunctionName

`func (o *ConfigPostingAttributesType) SetFormulaFunctionName(v string)`

SetFormulaFunctionName sets FormulaFunctionName field to given value.

### HasFormulaFunctionName

`func (o *ConfigPostingAttributesType) HasFormulaFunctionName() bool`

HasFormulaFunctionName returns a boolean if a field has been set.

### GetInventoryItems

`func (o *ConfigPostingAttributesType) GetInventoryItems() []PkgInventoryItemType`

GetInventoryItems returns the InventoryItems field if non-nil, zero value otherwise.

### GetInventoryItemsOk

`func (o *ConfigPostingAttributesType) GetInventoryItemsOk() (*[]PkgInventoryItemType, bool)`

GetInventoryItemsOk returns a tuple with the InventoryItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryItems

`func (o *ConfigPostingAttributesType) SetInventoryItems(v []PkgInventoryItemType)`

SetInventoryItems sets InventoryItems field to given value.

### HasInventoryItems

`func (o *ConfigPostingAttributesType) HasInventoryItems() bool`

HasInventoryItems returns a boolean if a field has been set.

### GetPostNextDay

`func (o *ConfigPostingAttributesType) GetPostNextDay() bool`

GetPostNextDay returns the PostNextDay field if non-nil, zero value otherwise.

### GetPostNextDayOk

`func (o *ConfigPostingAttributesType) GetPostNextDayOk() (*bool, bool)`

GetPostNextDayOk returns a tuple with the PostNextDay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostNextDay

`func (o *ConfigPostingAttributesType) SetPostNextDay(v bool)`

SetPostNextDay sets PostNextDay field to given value.

### HasPostNextDay

`func (o *ConfigPostingAttributesType) HasPostNextDay() bool`

HasPostNextDay returns a boolean if a field has been set.

### GetPostingRhythm

`func (o *ConfigPostingAttributesType) GetPostingRhythm() PackagePostingRhythmType`

GetPostingRhythm returns the PostingRhythm field if non-nil, zero value otherwise.

### GetPostingRhythmOk

`func (o *ConfigPostingAttributesType) GetPostingRhythmOk() (*PackagePostingRhythmType, bool)`

GetPostingRhythmOk returns a tuple with the PostingRhythm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingRhythm

`func (o *ConfigPostingAttributesType) SetPostingRhythm(v PackagePostingRhythmType)`

SetPostingRhythm sets PostingRhythm field to given value.

### HasPostingRhythm

`func (o *ConfigPostingAttributesType) HasPostingRhythm() bool`

HasPostingRhythm returns a boolean if a field has been set.

### GetPriceCalculationRule

`func (o *ConfigPostingAttributesType) GetPriceCalculationRule() PackageCalculationRuleType`

GetPriceCalculationRule returns the PriceCalculationRule field if non-nil, zero value otherwise.

### GetPriceCalculationRuleOk

`func (o *ConfigPostingAttributesType) GetPriceCalculationRuleOk() (*PackageCalculationRuleType, bool)`

GetPriceCalculationRuleOk returns a tuple with the PriceCalculationRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriceCalculationRule

`func (o *ConfigPostingAttributesType) SetPriceCalculationRule(v PackageCalculationRuleType)`

SetPriceCalculationRule sets PriceCalculationRule field to given value.

### HasPriceCalculationRule

`func (o *ConfigPostingAttributesType) HasPriceCalculationRule() bool`

HasPriceCalculationRule returns a boolean if a field has been set.

### GetPrintSeparateLine

`func (o *ConfigPostingAttributesType) GetPrintSeparateLine() bool`

GetPrintSeparateLine returns the PrintSeparateLine field if non-nil, zero value otherwise.

### GetPrintSeparateLineOk

`func (o *ConfigPostingAttributesType) GetPrintSeparateLineOk() (*bool, bool)`

GetPrintSeparateLineOk returns a tuple with the PrintSeparateLine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintSeparateLine

`func (o *ConfigPostingAttributesType) SetPrintSeparateLine(v bool)`

SetPrintSeparateLine sets PrintSeparateLine field to given value.

### HasPrintSeparateLine

`func (o *ConfigPostingAttributesType) HasPrintSeparateLine() bool`

HasPrintSeparateLine returns a boolean if a field has been set.

### GetSellSeparate

`func (o *ConfigPostingAttributesType) GetSellSeparate() bool`

GetSellSeparate returns the SellSeparate field if non-nil, zero value otherwise.

### GetSellSeparateOk

`func (o *ConfigPostingAttributesType) GetSellSeparateOk() (*bool, bool)`

GetSellSeparateOk returns a tuple with the SellSeparate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellSeparate

`func (o *ConfigPostingAttributesType) SetSellSeparate(v bool)`

SetSellSeparate sets SellSeparate field to given value.

### HasSellSeparate

`func (o *ConfigPostingAttributesType) HasSellSeparate() bool`

HasSellSeparate returns a boolean if a field has been set.

### GetStartTime

`func (o *ConfigPostingAttributesType) GetStartTime() string`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *ConfigPostingAttributesType) GetStartTimeOk() (*string, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *ConfigPostingAttributesType) SetStartTime(v string)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *ConfigPostingAttributesType) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### GetTicket

`func (o *ConfigPostingAttributesType) GetTicket() bool`

GetTicket returns the Ticket field if non-nil, zero value otherwise.

### GetTicketOk

`func (o *ConfigPostingAttributesType) GetTicketOk() (*bool, bool)`

GetTicketOk returns a tuple with the Ticket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTicket

`func (o *ConfigPostingAttributesType) SetTicket(v bool)`

SetTicket sets Ticket field to given value.

### HasTicket

`func (o *ConfigPostingAttributesType) HasTicket() bool`

HasTicket returns a boolean if a field has been set.

### GetWebBookable

`func (o *ConfigPostingAttributesType) GetWebBookable() bool`

GetWebBookable returns the WebBookable field if non-nil, zero value otherwise.

### GetWebBookableOk

`func (o *ConfigPostingAttributesType) GetWebBookableOk() (*bool, bool)`

GetWebBookableOk returns a tuple with the WebBookable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebBookable

`func (o *ConfigPostingAttributesType) SetWebBookable(v bool)`

SetWebBookable sets WebBookable field to given value.

### HasWebBookable

`func (o *ConfigPostingAttributesType) HasWebBookable() bool`

HasWebBookable returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


