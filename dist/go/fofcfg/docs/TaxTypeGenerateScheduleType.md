# TaxTypeGenerateScheduleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Rule** | Pointer to [**TaxTypeCalcRuleType**](TaxTypeCalcRuleType.md) |  | [optional] 
**StartDate** | Pointer to **string** | Date when this schedule will be effective. | [optional] 

## Methods

### NewTaxTypeGenerateScheduleType

`func NewTaxTypeGenerateScheduleType() *TaxTypeGenerateScheduleType`

NewTaxTypeGenerateScheduleType instantiates a new TaxTypeGenerateScheduleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaxTypeGenerateScheduleTypeWithDefaults

`func NewTaxTypeGenerateScheduleTypeWithDefaults() *TaxTypeGenerateScheduleType`

NewTaxTypeGenerateScheduleTypeWithDefaults instantiates a new TaxTypeGenerateScheduleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRule

`func (o *TaxTypeGenerateScheduleType) GetRule() TaxTypeCalcRuleType`

GetRule returns the Rule field if non-nil, zero value otherwise.

### GetRuleOk

`func (o *TaxTypeGenerateScheduleType) GetRuleOk() (*TaxTypeCalcRuleType, bool)`

GetRuleOk returns a tuple with the Rule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRule

`func (o *TaxTypeGenerateScheduleType) SetRule(v TaxTypeCalcRuleType)`

SetRule sets Rule field to given value.

### HasRule

`func (o *TaxTypeGenerateScheduleType) HasRule() bool`

HasRule returns a boolean if a field has been set.

### GetStartDate

`func (o *TaxTypeGenerateScheduleType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *TaxTypeGenerateScheduleType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *TaxTypeGenerateScheduleType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *TaxTypeGenerateScheduleType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


