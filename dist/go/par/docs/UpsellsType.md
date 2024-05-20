# UpsellsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AvailableAmount** | Pointer to [**AmountPointsType**](AmountPointsType.md) |  | [optional] 
**Upsell** | Pointer to [**[]UpsellType**](UpsellType.md) | Holds upsell information | [optional] 

## Methods

### NewUpsellsType

`func NewUpsellsType() *UpsellsType`

NewUpsellsType instantiates a new UpsellsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpsellsTypeWithDefaults

`func NewUpsellsTypeWithDefaults() *UpsellsType`

NewUpsellsTypeWithDefaults instantiates a new UpsellsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAvailableAmount

`func (o *UpsellsType) GetAvailableAmount() AmountPointsType`

GetAvailableAmount returns the AvailableAmount field if non-nil, zero value otherwise.

### GetAvailableAmountOk

`func (o *UpsellsType) GetAvailableAmountOk() (*AmountPointsType, bool)`

GetAvailableAmountOk returns a tuple with the AvailableAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailableAmount

`func (o *UpsellsType) SetAvailableAmount(v AmountPointsType)`

SetAvailableAmount sets AvailableAmount field to given value.

### HasAvailableAmount

`func (o *UpsellsType) HasAvailableAmount() bool`

HasAvailableAmount returns a boolean if a field has been set.

### GetUpsell

`func (o *UpsellsType) GetUpsell() []UpsellType`

GetUpsell returns the Upsell field if non-nil, zero value otherwise.

### GetUpsellOk

`func (o *UpsellsType) GetUpsellOk() (*[]UpsellType, bool)`

GetUpsellOk returns a tuple with the Upsell field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpsell

`func (o *UpsellsType) SetUpsell(v []UpsellType)`

SetUpsell sets Upsell field to given value.

### HasUpsell

`func (o *UpsellsType) HasUpsell() bool`

HasUpsell returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


