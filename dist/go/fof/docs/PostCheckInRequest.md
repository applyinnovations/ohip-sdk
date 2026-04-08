# PostCheckInRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reservation** | Pointer to [**ReservationReservation**](ReservationReservation.md) |  | [optional] 
**FetchReservationInstruction** | Pointer to [**[]CheckedInReservationInstructionType**](CheckedInReservationInstructionType.md) | Instructions to fetch reservations . | [optional] 
**IncludeNotifications** | Pointer to **bool** | When \&quot;true\&quot; alerts and comments are fetched. When \&quot;false\&quot;, these alerts and comments are not retrieved. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostCheckInRequest

`func NewPostCheckInRequest() *PostCheckInRequest`

NewPostCheckInRequest instantiates a new PostCheckInRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCheckInRequestWithDefaults

`func NewPostCheckInRequestWithDefaults() *PostCheckInRequest`

NewPostCheckInRequestWithDefaults instantiates a new PostCheckInRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservation

`func (o *PostCheckInRequest) GetReservation() ReservationReservation`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *PostCheckInRequest) GetReservationOk() (*ReservationReservation, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *PostCheckInRequest) SetReservation(v ReservationReservation)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *PostCheckInRequest) HasReservation() bool`

HasReservation returns a boolean if a field has been set.

### GetFetchReservationInstruction

`func (o *PostCheckInRequest) GetFetchReservationInstruction() []CheckedInReservationInstructionType`

GetFetchReservationInstruction returns the FetchReservationInstruction field if non-nil, zero value otherwise.

### GetFetchReservationInstructionOk

`func (o *PostCheckInRequest) GetFetchReservationInstructionOk() (*[]CheckedInReservationInstructionType, bool)`

GetFetchReservationInstructionOk returns a tuple with the FetchReservationInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFetchReservationInstruction

`func (o *PostCheckInRequest) SetFetchReservationInstruction(v []CheckedInReservationInstructionType)`

SetFetchReservationInstruction sets FetchReservationInstruction field to given value.

### HasFetchReservationInstruction

`func (o *PostCheckInRequest) HasFetchReservationInstruction() bool`

HasFetchReservationInstruction returns a boolean if a field has been set.

### GetIncludeNotifications

`func (o *PostCheckInRequest) GetIncludeNotifications() bool`

GetIncludeNotifications returns the IncludeNotifications field if non-nil, zero value otherwise.

### GetIncludeNotificationsOk

`func (o *PostCheckInRequest) GetIncludeNotificationsOk() (*bool, bool)`

GetIncludeNotificationsOk returns a tuple with the IncludeNotifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeNotifications

`func (o *PostCheckInRequest) SetIncludeNotifications(v bool)`

SetIncludeNotifications sets IncludeNotifications field to given value.

### HasIncludeNotifications

`func (o *PostCheckInRequest) HasIncludeNotifications() bool`

HasIncludeNotifications returns a boolean if a field has been set.

### GetLinks

`func (o *PostCheckInRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCheckInRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCheckInRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCheckInRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCheckInRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCheckInRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCheckInRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCheckInRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


