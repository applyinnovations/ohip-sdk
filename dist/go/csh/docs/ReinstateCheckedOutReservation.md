# ReinstateCheckedOutReservation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**NotifyInterfaces** | Pointer to **bool** | Indicates whether interfaces should be notified. | [optional] 
**OverrideFlag** | Pointer to **bool** | Indicate whether user wants to reinstate even if some other guest already checked in into same room. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReinstateCheckedOutReservation

`func NewReinstateCheckedOutReservation() *ReinstateCheckedOutReservation`

NewReinstateCheckedOutReservation instantiates a new ReinstateCheckedOutReservation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReinstateCheckedOutReservationWithDefaults

`func NewReinstateCheckedOutReservationWithDefaults() *ReinstateCheckedOutReservation`

NewReinstateCheckedOutReservationWithDefaults instantiates a new ReinstateCheckedOutReservation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ReinstateCheckedOutReservation) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReinstateCheckedOutReservation) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReinstateCheckedOutReservation) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReinstateCheckedOutReservation) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *ReinstateCheckedOutReservation) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ReinstateCheckedOutReservation) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ReinstateCheckedOutReservation) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ReinstateCheckedOutReservation) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetNotifyInterfaces

`func (o *ReinstateCheckedOutReservation) GetNotifyInterfaces() bool`

GetNotifyInterfaces returns the NotifyInterfaces field if non-nil, zero value otherwise.

### GetNotifyInterfacesOk

`func (o *ReinstateCheckedOutReservation) GetNotifyInterfacesOk() (*bool, bool)`

GetNotifyInterfacesOk returns a tuple with the NotifyInterfaces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotifyInterfaces

`func (o *ReinstateCheckedOutReservation) SetNotifyInterfaces(v bool)`

SetNotifyInterfaces sets NotifyInterfaces field to given value.

### HasNotifyInterfaces

`func (o *ReinstateCheckedOutReservation) HasNotifyInterfaces() bool`

HasNotifyInterfaces returns a boolean if a field has been set.

### GetOverrideFlag

`func (o *ReinstateCheckedOutReservation) GetOverrideFlag() bool`

GetOverrideFlag returns the OverrideFlag field if non-nil, zero value otherwise.

### GetOverrideFlagOk

`func (o *ReinstateCheckedOutReservation) GetOverrideFlagOk() (*bool, bool)`

GetOverrideFlagOk returns a tuple with the OverrideFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideFlag

`func (o *ReinstateCheckedOutReservation) SetOverrideFlag(v bool)`

SetOverrideFlag sets OverrideFlag field to given value.

### HasOverrideFlag

`func (o *ReinstateCheckedOutReservation) HasOverrideFlag() bool`

HasOverrideFlag returns a boolean if a field has been set.

### GetCashierId

`func (o *ReinstateCheckedOutReservation) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ReinstateCheckedOutReservation) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ReinstateCheckedOutReservation) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ReinstateCheckedOutReservation) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetLinks

`func (o *ReinstateCheckedOutReservation) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReinstateCheckedOutReservation) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReinstateCheckedOutReservation) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReinstateCheckedOutReservation) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReinstateCheckedOutReservation) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReinstateCheckedOutReservation) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReinstateCheckedOutReservation) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReinstateCheckedOutReservation) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


