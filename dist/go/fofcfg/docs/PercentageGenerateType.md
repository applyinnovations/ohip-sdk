# PercentageGenerateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to **float32** | Percentage Amount. | [optional] 
**CalculatedOn** | Pointer to [**GenerateCalcBucketType**](GenerateCalcBucketType.md) |  | [optional] 
**UseTaxBracket** | Pointer to **bool** | Determines if tax bracket calculations are to apply to generates. | [optional] 

## Methods

### NewPercentageGenerateType

`func NewPercentageGenerateType() *PercentageGenerateType`

NewPercentageGenerateType instantiates a new PercentageGenerateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPercentageGenerateTypeWithDefaults

`func NewPercentageGenerateTypeWithDefaults() *PercentageGenerateType`

NewPercentageGenerateTypeWithDefaults instantiates a new PercentageGenerateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *PercentageGenerateType) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PercentageGenerateType) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PercentageGenerateType) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *PercentageGenerateType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCalculatedOn

`func (o *PercentageGenerateType) GetCalculatedOn() GenerateCalcBucketType`

GetCalculatedOn returns the CalculatedOn field if non-nil, zero value otherwise.

### GetCalculatedOnOk

`func (o *PercentageGenerateType) GetCalculatedOnOk() (*GenerateCalcBucketType, bool)`

GetCalculatedOnOk returns a tuple with the CalculatedOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculatedOn

`func (o *PercentageGenerateType) SetCalculatedOn(v GenerateCalcBucketType)`

SetCalculatedOn sets CalculatedOn field to given value.

### HasCalculatedOn

`func (o *PercentageGenerateType) HasCalculatedOn() bool`

HasCalculatedOn returns a boolean if a field has been set.

### GetUseTaxBracket

`func (o *PercentageGenerateType) GetUseTaxBracket() bool`

GetUseTaxBracket returns the UseTaxBracket field if non-nil, zero value otherwise.

### GetUseTaxBracketOk

`func (o *PercentageGenerateType) GetUseTaxBracketOk() (*bool, bool)`

GetUseTaxBracketOk returns a tuple with the UseTaxBracket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseTaxBracket

`func (o *PercentageGenerateType) SetUseTaxBracket(v bool)`

SetUseTaxBracket sets UseTaxBracket field to given value.

### HasUseTaxBracket

`func (o *PercentageGenerateType) HasUseTaxBracket() bool`

HasUseTaxBracket returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


