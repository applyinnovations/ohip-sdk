# CalculatePostingResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Charges** | Pointer to [**[]CalculatePostingCharge**](CalculatePostingCharge.md) | Charges that will be posted based from the criteria defined. | [optional] 
**TotalAmount** | Pointer to **float32** | The full amount that would be posted. | [optional] 

## Methods

### NewCalculatePostingResult

`func NewCalculatePostingResult() *CalculatePostingResult`

NewCalculatePostingResult instantiates a new CalculatePostingResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCalculatePostingResultWithDefaults

`func NewCalculatePostingResultWithDefaults() *CalculatePostingResult`

NewCalculatePostingResultWithDefaults instantiates a new CalculatePostingResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCharges

`func (o *CalculatePostingResult) GetCharges() []CalculatePostingCharge`

GetCharges returns the Charges field if non-nil, zero value otherwise.

### GetChargesOk

`func (o *CalculatePostingResult) GetChargesOk() (*[]CalculatePostingCharge, bool)`

GetChargesOk returns a tuple with the Charges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharges

`func (o *CalculatePostingResult) SetCharges(v []CalculatePostingCharge)`

SetCharges sets Charges field to given value.

### HasCharges

`func (o *CalculatePostingResult) HasCharges() bool`

HasCharges returns a boolean if a field has been set.

### GetTotalAmount

`func (o *CalculatePostingResult) GetTotalAmount() float32`

GetTotalAmount returns the TotalAmount field if non-nil, zero value otherwise.

### GetTotalAmountOk

`func (o *CalculatePostingResult) GetTotalAmountOk() (*float32, bool)`

GetTotalAmountOk returns a tuple with the TotalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAmount

`func (o *CalculatePostingResult) SetTotalAmount(v float32)`

SetTotalAmount sets TotalAmount field to given value.

### HasTotalAmount

`func (o *CalculatePostingResult) HasTotalAmount() bool`

HasTotalAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


