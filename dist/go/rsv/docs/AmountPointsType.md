# AmountPointsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Points** | Pointer to **int32** | Number of points | [optional] 

## Methods

### NewAmountPointsType

`func NewAmountPointsType() *AmountPointsType`

NewAmountPointsType instantiates a new AmountPointsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAmountPointsTypeWithDefaults

`func NewAmountPointsTypeWithDefaults() *AmountPointsType`

NewAmountPointsTypeWithDefaults instantiates a new AmountPointsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *AmountPointsType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *AmountPointsType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *AmountPointsType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *AmountPointsType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetPoints

`func (o *AmountPointsType) GetPoints() int32`

GetPoints returns the Points field if non-nil, zero value otherwise.

### GetPointsOk

`func (o *AmountPointsType) GetPointsOk() (*int32, bool)`

GetPointsOk returns a tuple with the Points field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPoints

`func (o *AmountPointsType) SetPoints(v int32)`

SetPoints sets Points field to given value.

### HasPoints

`func (o *AmountPointsType) HasPoints() bool`

HasPoints returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


