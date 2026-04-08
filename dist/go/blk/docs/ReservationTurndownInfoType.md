# ReservationTurndownInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Allowed** | Pointer to **bool** | Indicates if turndown is allowed or not | [optional] 
**Status** | Pointer to [**TurndownStatusType**](TurndownStatusType.md) |  | [optional] 

## Methods

### NewReservationTurndownInfoType

`func NewReservationTurndownInfoType() *ReservationTurndownInfoType`

NewReservationTurndownInfoType instantiates a new ReservationTurndownInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationTurndownInfoTypeWithDefaults

`func NewReservationTurndownInfoTypeWithDefaults() *ReservationTurndownInfoType`

NewReservationTurndownInfoTypeWithDefaults instantiates a new ReservationTurndownInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowed

`func (o *ReservationTurndownInfoType) GetAllowed() bool`

GetAllowed returns the Allowed field if non-nil, zero value otherwise.

### GetAllowedOk

`func (o *ReservationTurndownInfoType) GetAllowedOk() (*bool, bool)`

GetAllowedOk returns a tuple with the Allowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowed

`func (o *ReservationTurndownInfoType) SetAllowed(v bool)`

SetAllowed sets Allowed field to given value.

### HasAllowed

`func (o *ReservationTurndownInfoType) HasAllowed() bool`

HasAllowed returns a boolean if a field has been set.

### GetStatus

`func (o *ReservationTurndownInfoType) GetStatus() TurndownStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ReservationTurndownInfoType) GetStatusOk() (*TurndownStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ReservationTurndownInfoType) SetStatus(v TurndownStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ReservationTurndownInfoType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


