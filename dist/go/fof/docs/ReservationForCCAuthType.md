# ReservationForCCAuthType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestFirstName** | Pointer to **string** |  | [optional] 
**GuestName** | Pointer to **string** | Guest name that is registered for the reservation. | [optional] 
**PaymentMethods** | Pointer to [**[]ReservationPaymentMethodType**](ReservationPaymentMethodType.md) | Defines reservation payment methods. | [optional] 
**ProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ReservationStatusInfo** | Pointer to [**HousekeepingRoomReservationStatusType**](HousekeepingRoomReservationStatusType.md) |  | [optional] 
**Room** | Pointer to **string** |  | [optional] 
**StayDateInfo** | Pointer to [**StayDateInfoType**](StayDateInfoType.md) |  | [optional] 
**VipStatus** | Pointer to [**VIPStatusType**](VIPStatusType.md) |  | [optional] 

## Methods

### NewReservationForCCAuthType

`func NewReservationForCCAuthType() *ReservationForCCAuthType`

NewReservationForCCAuthType instantiates a new ReservationForCCAuthType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationForCCAuthTypeWithDefaults

`func NewReservationForCCAuthTypeWithDefaults() *ReservationForCCAuthType`

NewReservationForCCAuthTypeWithDefaults instantiates a new ReservationForCCAuthType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestFirstName

`func (o *ReservationForCCAuthType) GetGuestFirstName() string`

GetGuestFirstName returns the GuestFirstName field if non-nil, zero value otherwise.

### GetGuestFirstNameOk

`func (o *ReservationForCCAuthType) GetGuestFirstNameOk() (*string, bool)`

GetGuestFirstNameOk returns a tuple with the GuestFirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestFirstName

`func (o *ReservationForCCAuthType) SetGuestFirstName(v string)`

SetGuestFirstName sets GuestFirstName field to given value.

### HasGuestFirstName

`func (o *ReservationForCCAuthType) HasGuestFirstName() bool`

HasGuestFirstName returns a boolean if a field has been set.

### GetGuestName

`func (o *ReservationForCCAuthType) GetGuestName() string`

GetGuestName returns the GuestName field if non-nil, zero value otherwise.

### GetGuestNameOk

`func (o *ReservationForCCAuthType) GetGuestNameOk() (*string, bool)`

GetGuestNameOk returns a tuple with the GuestName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestName

`func (o *ReservationForCCAuthType) SetGuestName(v string)`

SetGuestName sets GuestName field to given value.

### HasGuestName

`func (o *ReservationForCCAuthType) HasGuestName() bool`

HasGuestName returns a boolean if a field has been set.

### GetPaymentMethods

`func (o *ReservationForCCAuthType) GetPaymentMethods() []ReservationPaymentMethodType`

GetPaymentMethods returns the PaymentMethods field if non-nil, zero value otherwise.

### GetPaymentMethodsOk

`func (o *ReservationForCCAuthType) GetPaymentMethodsOk() (*[]ReservationPaymentMethodType, bool)`

GetPaymentMethodsOk returns a tuple with the PaymentMethods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethods

`func (o *ReservationForCCAuthType) SetPaymentMethods(v []ReservationPaymentMethodType)`

SetPaymentMethods sets PaymentMethods field to given value.

### HasPaymentMethods

`func (o *ReservationForCCAuthType) HasPaymentMethods() bool`

HasPaymentMethods returns a boolean if a field has been set.

### GetProfileId

`func (o *ReservationForCCAuthType) GetProfileId() UniqueIDType`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *ReservationForCCAuthType) GetProfileIdOk() (*UniqueIDType, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *ReservationForCCAuthType) SetProfileId(v UniqueIDType)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *ReservationForCCAuthType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetReservationId

`func (o *ReservationForCCAuthType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ReservationForCCAuthType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ReservationForCCAuthType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ReservationForCCAuthType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetReservationStatusInfo

`func (o *ReservationForCCAuthType) GetReservationStatusInfo() HousekeepingRoomReservationStatusType`

GetReservationStatusInfo returns the ReservationStatusInfo field if non-nil, zero value otherwise.

### GetReservationStatusInfoOk

`func (o *ReservationForCCAuthType) GetReservationStatusInfoOk() (*HousekeepingRoomReservationStatusType, bool)`

GetReservationStatusInfoOk returns a tuple with the ReservationStatusInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatusInfo

`func (o *ReservationForCCAuthType) SetReservationStatusInfo(v HousekeepingRoomReservationStatusType)`

SetReservationStatusInfo sets ReservationStatusInfo field to given value.

### HasReservationStatusInfo

`func (o *ReservationForCCAuthType) HasReservationStatusInfo() bool`

HasReservationStatusInfo returns a boolean if a field has been set.

### GetRoom

`func (o *ReservationForCCAuthType) GetRoom() string`

GetRoom returns the Room field if non-nil, zero value otherwise.

### GetRoomOk

`func (o *ReservationForCCAuthType) GetRoomOk() (*string, bool)`

GetRoomOk returns a tuple with the Room field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoom

`func (o *ReservationForCCAuthType) SetRoom(v string)`

SetRoom sets Room field to given value.

### HasRoom

`func (o *ReservationForCCAuthType) HasRoom() bool`

HasRoom returns a boolean if a field has been set.

### GetStayDateInfo

`func (o *ReservationForCCAuthType) GetStayDateInfo() StayDateInfoType`

GetStayDateInfo returns the StayDateInfo field if non-nil, zero value otherwise.

### GetStayDateInfoOk

`func (o *ReservationForCCAuthType) GetStayDateInfoOk() (*StayDateInfoType, bool)`

GetStayDateInfoOk returns a tuple with the StayDateInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayDateInfo

`func (o *ReservationForCCAuthType) SetStayDateInfo(v StayDateInfoType)`

SetStayDateInfo sets StayDateInfo field to given value.

### HasStayDateInfo

`func (o *ReservationForCCAuthType) HasStayDateInfo() bool`

HasStayDateInfo returns a boolean if a field has been set.

### GetVipStatus

`func (o *ReservationForCCAuthType) GetVipStatus() VIPStatusType`

GetVipStatus returns the VipStatus field if non-nil, zero value otherwise.

### GetVipStatusOk

`func (o *ReservationForCCAuthType) GetVipStatusOk() (*VIPStatusType, bool)`

GetVipStatusOk returns a tuple with the VipStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVipStatus

`func (o *ReservationForCCAuthType) SetVipStatus(v VIPStatusType)`

SetVipStatus sets VipStatus field to given value.

### HasVipStatus

`func (o *ReservationForCCAuthType) HasVipStatus() bool`

HasVipStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


