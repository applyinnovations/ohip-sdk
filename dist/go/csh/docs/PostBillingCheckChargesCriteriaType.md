# PostBillingCheckChargesCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code. | [optional] 
**CheckNumber** | Pointer to **string** | Indicates the check number. | [optional] 
**RevenueDate** | Pointer to **string** | The date against which charges are posted. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**Items** | Pointer to [**[]PostBillingCheckChargesItemCriteriaType**](PostBillingCheckChargesItemCriteriaType.md) | Line items of the check. | [optional] 
**CheckId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**CashierId** | Pointer to **float32** | Cashier Id of the Cashier. | [optional] 

## Methods

### NewPostBillingCheckChargesCriteriaType

`func NewPostBillingCheckChargesCriteriaType() *PostBillingCheckChargesCriteriaType`

NewPostBillingCheckChargesCriteriaType instantiates a new PostBillingCheckChargesCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostBillingCheckChargesCriteriaTypeWithDefaults

`func NewPostBillingCheckChargesCriteriaTypeWithDefaults() *PostBillingCheckChargesCriteriaType`

NewPostBillingCheckChargesCriteriaTypeWithDefaults instantiates a new PostBillingCheckChargesCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *PostBillingCheckChargesCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PostBillingCheckChargesCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PostBillingCheckChargesCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PostBillingCheckChargesCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCheckNumber

`func (o *PostBillingCheckChargesCriteriaType) GetCheckNumber() string`

GetCheckNumber returns the CheckNumber field if non-nil, zero value otherwise.

### GetCheckNumberOk

`func (o *PostBillingCheckChargesCriteriaType) GetCheckNumberOk() (*string, bool)`

GetCheckNumberOk returns a tuple with the CheckNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckNumber

`func (o *PostBillingCheckChargesCriteriaType) SetCheckNumber(v string)`

SetCheckNumber sets CheckNumber field to given value.

### HasCheckNumber

`func (o *PostBillingCheckChargesCriteriaType) HasCheckNumber() bool`

HasCheckNumber returns a boolean if a field has been set.

### GetRevenueDate

`func (o *PostBillingCheckChargesCriteriaType) GetRevenueDate() string`

GetRevenueDate returns the RevenueDate field if non-nil, zero value otherwise.

### GetRevenueDateOk

`func (o *PostBillingCheckChargesCriteriaType) GetRevenueDateOk() (*string, bool)`

GetRevenueDateOk returns a tuple with the RevenueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueDate

`func (o *PostBillingCheckChargesCriteriaType) SetRevenueDate(v string)`

SetRevenueDate sets RevenueDate field to given value.

### HasRevenueDate

`func (o *PostBillingCheckChargesCriteriaType) HasRevenueDate() bool`

HasRevenueDate returns a boolean if a field has been set.

### GetReservationId

`func (o *PostBillingCheckChargesCriteriaType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *PostBillingCheckChargesCriteriaType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *PostBillingCheckChargesCriteriaType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *PostBillingCheckChargesCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetItems

`func (o *PostBillingCheckChargesCriteriaType) GetItems() []PostBillingCheckChargesItemCriteriaType`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *PostBillingCheckChargesCriteriaType) GetItemsOk() (*[]PostBillingCheckChargesItemCriteriaType, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *PostBillingCheckChargesCriteriaType) SetItems(v []PostBillingCheckChargesItemCriteriaType)`

SetItems sets Items field to given value.

### HasItems

`func (o *PostBillingCheckChargesCriteriaType) HasItems() bool`

HasItems returns a boolean if a field has been set.

### GetCheckId

`func (o *PostBillingCheckChargesCriteriaType) GetCheckId() UniqueIDType`

GetCheckId returns the CheckId field if non-nil, zero value otherwise.

### GetCheckIdOk

`func (o *PostBillingCheckChargesCriteriaType) GetCheckIdOk() (*UniqueIDType, bool)`

GetCheckIdOk returns a tuple with the CheckId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckId

`func (o *PostBillingCheckChargesCriteriaType) SetCheckId(v UniqueIDType)`

SetCheckId sets CheckId field to given value.

### HasCheckId

`func (o *PostBillingCheckChargesCriteriaType) HasCheckId() bool`

HasCheckId returns a boolean if a field has been set.

### GetCashierId

`func (o *PostBillingCheckChargesCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *PostBillingCheckChargesCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *PostBillingCheckChargesCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *PostBillingCheckChargesCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


