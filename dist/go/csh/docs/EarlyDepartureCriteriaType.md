# EarlyDepartureCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property code. | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**IgnoreRateRestriction** | Pointer to **bool** | Indicates if Rate Restriction check should be overridden. | [optional] 
**PostConsumedAllowanceToGuest** | Pointer to **bool** | Indicates if any allowance consumed by the guest for today can be posted to the Guest Folio. If this cannot be done then the Early Departure cannot proceed. | [optional] 
**IgnoreCheckOnTieredRate** | Pointer to **bool** | Indicates if check has to be done for Rate Tiers. | [optional] 
**PostEarlyDeparturePenalty** | Pointer to **bool** | Indicates if the early departure penalty should be posted . | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 

## Methods

### NewEarlyDepartureCriteriaType

`func NewEarlyDepartureCriteriaType() *EarlyDepartureCriteriaType`

NewEarlyDepartureCriteriaType instantiates a new EarlyDepartureCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEarlyDepartureCriteriaTypeWithDefaults

`func NewEarlyDepartureCriteriaTypeWithDefaults() *EarlyDepartureCriteriaType`

NewEarlyDepartureCriteriaTypeWithDefaults instantiates a new EarlyDepartureCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *EarlyDepartureCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *EarlyDepartureCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *EarlyDepartureCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *EarlyDepartureCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationIdList

`func (o *EarlyDepartureCriteriaType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *EarlyDepartureCriteriaType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *EarlyDepartureCriteriaType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *EarlyDepartureCriteriaType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetIgnoreRateRestriction

`func (o *EarlyDepartureCriteriaType) GetIgnoreRateRestriction() bool`

GetIgnoreRateRestriction returns the IgnoreRateRestriction field if non-nil, zero value otherwise.

### GetIgnoreRateRestrictionOk

`func (o *EarlyDepartureCriteriaType) GetIgnoreRateRestrictionOk() (*bool, bool)`

GetIgnoreRateRestrictionOk returns a tuple with the IgnoreRateRestriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIgnoreRateRestriction

`func (o *EarlyDepartureCriteriaType) SetIgnoreRateRestriction(v bool)`

SetIgnoreRateRestriction sets IgnoreRateRestriction field to given value.

### HasIgnoreRateRestriction

`func (o *EarlyDepartureCriteriaType) HasIgnoreRateRestriction() bool`

HasIgnoreRateRestriction returns a boolean if a field has been set.

### GetPostConsumedAllowanceToGuest

`func (o *EarlyDepartureCriteriaType) GetPostConsumedAllowanceToGuest() bool`

GetPostConsumedAllowanceToGuest returns the PostConsumedAllowanceToGuest field if non-nil, zero value otherwise.

### GetPostConsumedAllowanceToGuestOk

`func (o *EarlyDepartureCriteriaType) GetPostConsumedAllowanceToGuestOk() (*bool, bool)`

GetPostConsumedAllowanceToGuestOk returns a tuple with the PostConsumedAllowanceToGuest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostConsumedAllowanceToGuest

`func (o *EarlyDepartureCriteriaType) SetPostConsumedAllowanceToGuest(v bool)`

SetPostConsumedAllowanceToGuest sets PostConsumedAllowanceToGuest field to given value.

### HasPostConsumedAllowanceToGuest

`func (o *EarlyDepartureCriteriaType) HasPostConsumedAllowanceToGuest() bool`

HasPostConsumedAllowanceToGuest returns a boolean if a field has been set.

### GetIgnoreCheckOnTieredRate

`func (o *EarlyDepartureCriteriaType) GetIgnoreCheckOnTieredRate() bool`

GetIgnoreCheckOnTieredRate returns the IgnoreCheckOnTieredRate field if non-nil, zero value otherwise.

### GetIgnoreCheckOnTieredRateOk

`func (o *EarlyDepartureCriteriaType) GetIgnoreCheckOnTieredRateOk() (*bool, bool)`

GetIgnoreCheckOnTieredRateOk returns a tuple with the IgnoreCheckOnTieredRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIgnoreCheckOnTieredRate

`func (o *EarlyDepartureCriteriaType) SetIgnoreCheckOnTieredRate(v bool)`

SetIgnoreCheckOnTieredRate sets IgnoreCheckOnTieredRate field to given value.

### HasIgnoreCheckOnTieredRate

`func (o *EarlyDepartureCriteriaType) HasIgnoreCheckOnTieredRate() bool`

HasIgnoreCheckOnTieredRate returns a boolean if a field has been set.

### GetPostEarlyDeparturePenalty

`func (o *EarlyDepartureCriteriaType) GetPostEarlyDeparturePenalty() bool`

GetPostEarlyDeparturePenalty returns the PostEarlyDeparturePenalty field if non-nil, zero value otherwise.

### GetPostEarlyDeparturePenaltyOk

`func (o *EarlyDepartureCriteriaType) GetPostEarlyDeparturePenaltyOk() (*bool, bool)`

GetPostEarlyDeparturePenaltyOk returns a tuple with the PostEarlyDeparturePenalty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostEarlyDeparturePenalty

`func (o *EarlyDepartureCriteriaType) SetPostEarlyDeparturePenalty(v bool)`

SetPostEarlyDeparturePenalty sets PostEarlyDeparturePenalty field to given value.

### HasPostEarlyDeparturePenalty

`func (o *EarlyDepartureCriteriaType) HasPostEarlyDeparturePenalty() bool`

HasPostEarlyDeparturePenalty returns a boolean if a field has been set.

### GetCashierId

`func (o *EarlyDepartureCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *EarlyDepartureCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *EarlyDepartureCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *EarlyDepartureCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


