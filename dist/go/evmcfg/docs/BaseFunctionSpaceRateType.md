# BaseFunctionSpaceRateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code is used to identify a Catering Code. | [optional] 
**CodeId** | Pointer to **float32** | Code ID is used to identify a Catering Code by ID. | [optional] 
**Default** | Pointer to **bool** | Indicates that this rate is the default for the function space. | [optional] 
**DisplaySequence** | Pointer to **float32** | Catering Codes display sequence Number | [optional] 
**Hourly** | Pointer to **bool** | Indicates that this rate is computed per hour. | [optional] 
**Inactive** | Pointer to **bool** | Indicates that this rate is inactive. | [optional] 
**MinimunRevenue** | Pointer to **bool** | Indicates that minimum revenue should be enforced for this rate code. | [optional] 
**RateType** | Pointer to [**FunctionSpaceRateTypeType**](FunctionSpaceRateTypeType.md) |  | [optional] 
**RentAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**RevenueType** | Pointer to **string** | Catering revenue type used for function space rent amount. | [optional] 
**TranslatableDescription** | Pointer to [**TranslationTextType200**](TranslationTextType200.md) |  | [optional] 

## Methods

### NewBaseFunctionSpaceRateType

`func NewBaseFunctionSpaceRateType() *BaseFunctionSpaceRateType`

NewBaseFunctionSpaceRateType instantiates a new BaseFunctionSpaceRateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBaseFunctionSpaceRateTypeWithDefaults

`func NewBaseFunctionSpaceRateTypeWithDefaults() *BaseFunctionSpaceRateType`

NewBaseFunctionSpaceRateTypeWithDefaults instantiates a new BaseFunctionSpaceRateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *BaseFunctionSpaceRateType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *BaseFunctionSpaceRateType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *BaseFunctionSpaceRateType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *BaseFunctionSpaceRateType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetCodeId

`func (o *BaseFunctionSpaceRateType) GetCodeId() float32`

GetCodeId returns the CodeId field if non-nil, zero value otherwise.

### GetCodeIdOk

`func (o *BaseFunctionSpaceRateType) GetCodeIdOk() (*float32, bool)`

GetCodeIdOk returns a tuple with the CodeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCodeId

`func (o *BaseFunctionSpaceRateType) SetCodeId(v float32)`

SetCodeId sets CodeId field to given value.

### HasCodeId

`func (o *BaseFunctionSpaceRateType) HasCodeId() bool`

HasCodeId returns a boolean if a field has been set.

### GetDefault

`func (o *BaseFunctionSpaceRateType) GetDefault() bool`

GetDefault returns the Default field if non-nil, zero value otherwise.

### GetDefaultOk

`func (o *BaseFunctionSpaceRateType) GetDefaultOk() (*bool, bool)`

GetDefaultOk returns a tuple with the Default field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefault

`func (o *BaseFunctionSpaceRateType) SetDefault(v bool)`

SetDefault sets Default field to given value.

### HasDefault

`func (o *BaseFunctionSpaceRateType) HasDefault() bool`

HasDefault returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *BaseFunctionSpaceRateType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *BaseFunctionSpaceRateType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *BaseFunctionSpaceRateType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *BaseFunctionSpaceRateType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetHourly

`func (o *BaseFunctionSpaceRateType) GetHourly() bool`

GetHourly returns the Hourly field if non-nil, zero value otherwise.

### GetHourlyOk

`func (o *BaseFunctionSpaceRateType) GetHourlyOk() (*bool, bool)`

GetHourlyOk returns a tuple with the Hourly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHourly

`func (o *BaseFunctionSpaceRateType) SetHourly(v bool)`

SetHourly sets Hourly field to given value.

### HasHourly

`func (o *BaseFunctionSpaceRateType) HasHourly() bool`

HasHourly returns a boolean if a field has been set.

### GetInactive

`func (o *BaseFunctionSpaceRateType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *BaseFunctionSpaceRateType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *BaseFunctionSpaceRateType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *BaseFunctionSpaceRateType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetMinimunRevenue

`func (o *BaseFunctionSpaceRateType) GetMinimunRevenue() bool`

GetMinimunRevenue returns the MinimunRevenue field if non-nil, zero value otherwise.

### GetMinimunRevenueOk

`func (o *BaseFunctionSpaceRateType) GetMinimunRevenueOk() (*bool, bool)`

GetMinimunRevenueOk returns a tuple with the MinimunRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimunRevenue

`func (o *BaseFunctionSpaceRateType) SetMinimunRevenue(v bool)`

SetMinimunRevenue sets MinimunRevenue field to given value.

### HasMinimunRevenue

`func (o *BaseFunctionSpaceRateType) HasMinimunRevenue() bool`

HasMinimunRevenue returns a boolean if a field has been set.

### GetRateType

`func (o *BaseFunctionSpaceRateType) GetRateType() FunctionSpaceRateTypeType`

GetRateType returns the RateType field if non-nil, zero value otherwise.

### GetRateTypeOk

`func (o *BaseFunctionSpaceRateType) GetRateTypeOk() (*FunctionSpaceRateTypeType, bool)`

GetRateTypeOk returns a tuple with the RateType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateType

`func (o *BaseFunctionSpaceRateType) SetRateType(v FunctionSpaceRateTypeType)`

SetRateType sets RateType field to given value.

### HasRateType

`func (o *BaseFunctionSpaceRateType) HasRateType() bool`

HasRateType returns a boolean if a field has been set.

### GetRentAmount

`func (o *BaseFunctionSpaceRateType) GetRentAmount() CurrencyAmountType`

GetRentAmount returns the RentAmount field if non-nil, zero value otherwise.

### GetRentAmountOk

`func (o *BaseFunctionSpaceRateType) GetRentAmountOk() (*CurrencyAmountType, bool)`

GetRentAmountOk returns a tuple with the RentAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRentAmount

`func (o *BaseFunctionSpaceRateType) SetRentAmount(v CurrencyAmountType)`

SetRentAmount sets RentAmount field to given value.

### HasRentAmount

`func (o *BaseFunctionSpaceRateType) HasRentAmount() bool`

HasRentAmount returns a boolean if a field has been set.

### GetRevenueType

`func (o *BaseFunctionSpaceRateType) GetRevenueType() string`

GetRevenueType returns the RevenueType field if non-nil, zero value otherwise.

### GetRevenueTypeOk

`func (o *BaseFunctionSpaceRateType) GetRevenueTypeOk() (*string, bool)`

GetRevenueTypeOk returns a tuple with the RevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueType

`func (o *BaseFunctionSpaceRateType) SetRevenueType(v string)`

SetRevenueType sets RevenueType field to given value.

### HasRevenueType

`func (o *BaseFunctionSpaceRateType) HasRevenueType() bool`

HasRevenueType returns a boolean if a field has been set.

### GetTranslatableDescription

`func (o *BaseFunctionSpaceRateType) GetTranslatableDescription() TranslationTextType200`

GetTranslatableDescription returns the TranslatableDescription field if non-nil, zero value otherwise.

### GetTranslatableDescriptionOk

`func (o *BaseFunctionSpaceRateType) GetTranslatableDescriptionOk() (*TranslationTextType200, bool)`

GetTranslatableDescriptionOk returns a tuple with the TranslatableDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslatableDescription

`func (o *BaseFunctionSpaceRateType) SetTranslatableDescription(v TranslationTextType200)`

SetTranslatableDescription sets TranslatableDescription field to given value.

### HasTranslatableDescription

`func (o *BaseFunctionSpaceRateType) HasTranslatableDescription() bool`

HasTranslatableDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


