# FetchRevenueTransactionCodesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RevenueTransactionCodes** | Pointer to [**[]RotationRevenueTransactionCodeType**](RotationRevenueTransactionCodeType.md) | A revenue transaction code. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchRevenueTransactionCodesDetails

`func NewFetchRevenueTransactionCodesDetails() *FetchRevenueTransactionCodesDetails`

NewFetchRevenueTransactionCodesDetails instantiates a new FetchRevenueTransactionCodesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchRevenueTransactionCodesDetailsWithDefaults

`func NewFetchRevenueTransactionCodesDetailsWithDefaults() *FetchRevenueTransactionCodesDetails`

NewFetchRevenueTransactionCodesDetailsWithDefaults instantiates a new FetchRevenueTransactionCodesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRevenueTransactionCodes

`func (o *FetchRevenueTransactionCodesDetails) GetRevenueTransactionCodes() []RotationRevenueTransactionCodeType`

GetRevenueTransactionCodes returns the RevenueTransactionCodes field if non-nil, zero value otherwise.

### GetRevenueTransactionCodesOk

`func (o *FetchRevenueTransactionCodesDetails) GetRevenueTransactionCodesOk() (*[]RotationRevenueTransactionCodeType, bool)`

GetRevenueTransactionCodesOk returns a tuple with the RevenueTransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueTransactionCodes

`func (o *FetchRevenueTransactionCodesDetails) SetRevenueTransactionCodes(v []RotationRevenueTransactionCodeType)`

SetRevenueTransactionCodes sets RevenueTransactionCodes field to given value.

### HasRevenueTransactionCodes

`func (o *FetchRevenueTransactionCodesDetails) HasRevenueTransactionCodes() bool`

HasRevenueTransactionCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchRevenueTransactionCodesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchRevenueTransactionCodesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchRevenueTransactionCodesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchRevenueTransactionCodesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


