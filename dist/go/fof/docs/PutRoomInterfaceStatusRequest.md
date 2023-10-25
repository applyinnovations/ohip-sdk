# PutRoomInterfaceStatusRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ReservationInterfaceStatus** | Pointer to [**ReservationInterfaceReservationInterfaceStatus**](ReservationInterfaceReservationInterfaceStatus.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutRoomInterfaceStatusRequest

`func NewPutRoomInterfaceStatusRequest() *PutRoomInterfaceStatusRequest`

NewPutRoomInterfaceStatusRequest instantiates a new PutRoomInterfaceStatusRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutRoomInterfaceStatusRequestWithDefaults

`func NewPutRoomInterfaceStatusRequestWithDefaults() *PutRoomInterfaceStatusRequest`

NewPutRoomInterfaceStatusRequestWithDefaults instantiates a new PutRoomInterfaceStatusRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutRoomInterfaceStatusRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutRoomInterfaceStatusRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutRoomInterfaceStatusRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutRoomInterfaceStatusRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationInterfaceStatus

`func (o *PutRoomInterfaceStatusRequest) GetReservationInterfaceStatus() ReservationInterfaceReservationInterfaceStatus`

GetReservationInterfaceStatus returns the ReservationInterfaceStatus field if non-nil, zero value otherwise.

### GetReservationInterfaceStatusOk

`func (o *PutRoomInterfaceStatusRequest) GetReservationInterfaceStatusOk() (*ReservationInterfaceReservationInterfaceStatus, bool)`

GetReservationInterfaceStatusOk returns a tuple with the ReservationInterfaceStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInterfaceStatus

`func (o *PutRoomInterfaceStatusRequest) SetReservationInterfaceStatus(v ReservationInterfaceReservationInterfaceStatus)`

SetReservationInterfaceStatus sets ReservationInterfaceStatus field to given value.

### HasReservationInterfaceStatus

`func (o *PutRoomInterfaceStatusRequest) HasReservationInterfaceStatus() bool`

HasReservationInterfaceStatus returns a boolean if a field has been set.

### GetWarnings

`func (o *PutRoomInterfaceStatusRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutRoomInterfaceStatusRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutRoomInterfaceStatusRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutRoomInterfaceStatusRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


