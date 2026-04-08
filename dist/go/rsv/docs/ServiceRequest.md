# ServiceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code of the service request. | [optional] 
**Code** | Pointer to **string** | Service request code. | [optional] 
**Status** | Pointer to [**ServiceRequestStatusType**](ServiceRequestStatusType.md) |  | [optional] 
**Priority** | Pointer to **string** | The priority level of the service request. | [optional] 
**Department** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**GuestName** | Pointer to **string** | The guest name. | [optional] 
**Room** | Pointer to **string** | The room number in which the service request was created. | [optional] 
**Comment** | Pointer to **string** | Description of the service request. | [optional] 
**Action** | Pointer to **string** | Description of the action taken to complete the request. | [optional] 

## Methods

### NewServiceRequest

`func NewServiceRequest() *ServiceRequest`

NewServiceRequest instantiates a new ServiceRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceRequestWithDefaults

`func NewServiceRequestWithDefaults() *ServiceRequest`

NewServiceRequestWithDefaults instantiates a new ServiceRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ServiceRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ServiceRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ServiceRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ServiceRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCode

`func (o *ServiceRequest) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ServiceRequest) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ServiceRequest) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ServiceRequest) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetStatus

`func (o *ServiceRequest) GetStatus() ServiceRequestStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ServiceRequest) GetStatusOk() (*ServiceRequestStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ServiceRequest) SetStatus(v ServiceRequestStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ServiceRequest) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetPriority

`func (o *ServiceRequest) GetPriority() string`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *ServiceRequest) GetPriorityOk() (*string, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *ServiceRequest) SetPriority(v string)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *ServiceRequest) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetDepartment

`func (o *ServiceRequest) GetDepartment() CodeDescriptionType`

GetDepartment returns the Department field if non-nil, zero value otherwise.

### GetDepartmentOk

`func (o *ServiceRequest) GetDepartmentOk() (*CodeDescriptionType, bool)`

GetDepartmentOk returns a tuple with the Department field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartment

`func (o *ServiceRequest) SetDepartment(v CodeDescriptionType)`

SetDepartment sets Department field to given value.

### HasDepartment

`func (o *ServiceRequest) HasDepartment() bool`

HasDepartment returns a boolean if a field has been set.

### GetReservationIdList

`func (o *ServiceRequest) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *ServiceRequest) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *ServiceRequest) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *ServiceRequest) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetProfileId

`func (o *ServiceRequest) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *ServiceRequest) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *ServiceRequest) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *ServiceRequest) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetGuestName

`func (o *ServiceRequest) GetGuestName() string`

GetGuestName returns the GuestName field if non-nil, zero value otherwise.

### GetGuestNameOk

`func (o *ServiceRequest) GetGuestNameOk() (*string, bool)`

GetGuestNameOk returns a tuple with the GuestName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestName

`func (o *ServiceRequest) SetGuestName(v string)`

SetGuestName sets GuestName field to given value.

### HasGuestName

`func (o *ServiceRequest) HasGuestName() bool`

HasGuestName returns a boolean if a field has been set.

### GetRoom

`func (o *ServiceRequest) GetRoom() string`

GetRoom returns the Room field if non-nil, zero value otherwise.

### GetRoomOk

`func (o *ServiceRequest) GetRoomOk() (*string, bool)`

GetRoomOk returns a tuple with the Room field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoom

`func (o *ServiceRequest) SetRoom(v string)`

SetRoom sets Room field to given value.

### HasRoom

`func (o *ServiceRequest) HasRoom() bool`

HasRoom returns a boolean if a field has been set.

### GetComment

`func (o *ServiceRequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *ServiceRequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *ServiceRequest) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *ServiceRequest) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetAction

`func (o *ServiceRequest) GetAction() string`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *ServiceRequest) GetActionOk() (*string, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *ServiceRequest) SetAction(v string)`

SetAction sets Action field to given value.

### HasAction

`func (o *ServiceRequest) HasAction() bool`

HasAction returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


