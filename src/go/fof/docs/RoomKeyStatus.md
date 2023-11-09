# RoomKeyStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestDepartureDate** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**GuestDepartureTime** | Pointer to [**DateTimeRangeType**](DateTimeRangeType.md) |  | [optional] 
**GuestFirstName** | Pointer to **string** |  | [optional] 
**GuestLastName** | Pointer to **string** |  | [optional] 
**KeyOptions** | Pointer to **string** |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Room** | Pointer to **string** |  | [optional] 
**ValidUntil** | Pointer to **string** |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewRoomKeyStatus

`func NewRoomKeyStatus() *RoomKeyStatus`

NewRoomKeyStatus instantiates a new RoomKeyStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomKeyStatusWithDefaults

`func NewRoomKeyStatusWithDefaults() *RoomKeyStatus`

NewRoomKeyStatusWithDefaults instantiates a new RoomKeyStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestDepartureDate

`func (o *RoomKeyStatus) GetGuestDepartureDate() DateRangeType`

GetGuestDepartureDate returns the GuestDepartureDate field if non-nil, zero value otherwise.

### GetGuestDepartureDateOk

`func (o *RoomKeyStatus) GetGuestDepartureDateOk() (*DateRangeType, bool)`

GetGuestDepartureDateOk returns a tuple with the GuestDepartureDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestDepartureDate

`func (o *RoomKeyStatus) SetGuestDepartureDate(v DateRangeType)`

SetGuestDepartureDate sets GuestDepartureDate field to given value.

### HasGuestDepartureDate

`func (o *RoomKeyStatus) HasGuestDepartureDate() bool`

HasGuestDepartureDate returns a boolean if a field has been set.

### GetGuestDepartureTime

`func (o *RoomKeyStatus) GetGuestDepartureTime() DateTimeRangeType`

GetGuestDepartureTime returns the GuestDepartureTime field if non-nil, zero value otherwise.

### GetGuestDepartureTimeOk

`func (o *RoomKeyStatus) GetGuestDepartureTimeOk() (*DateTimeRangeType, bool)`

GetGuestDepartureTimeOk returns a tuple with the GuestDepartureTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestDepartureTime

`func (o *RoomKeyStatus) SetGuestDepartureTime(v DateTimeRangeType)`

SetGuestDepartureTime sets GuestDepartureTime field to given value.

### HasGuestDepartureTime

`func (o *RoomKeyStatus) HasGuestDepartureTime() bool`

HasGuestDepartureTime returns a boolean if a field has been set.

### GetGuestFirstName

`func (o *RoomKeyStatus) GetGuestFirstName() string`

GetGuestFirstName returns the GuestFirstName field if non-nil, zero value otherwise.

### GetGuestFirstNameOk

`func (o *RoomKeyStatus) GetGuestFirstNameOk() (*string, bool)`

GetGuestFirstNameOk returns a tuple with the GuestFirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestFirstName

`func (o *RoomKeyStatus) SetGuestFirstName(v string)`

SetGuestFirstName sets GuestFirstName field to given value.

### HasGuestFirstName

`func (o *RoomKeyStatus) HasGuestFirstName() bool`

HasGuestFirstName returns a boolean if a field has been set.

### GetGuestLastName

`func (o *RoomKeyStatus) GetGuestLastName() string`

GetGuestLastName returns the GuestLastName field if non-nil, zero value otherwise.

### GetGuestLastNameOk

`func (o *RoomKeyStatus) GetGuestLastNameOk() (*string, bool)`

GetGuestLastNameOk returns a tuple with the GuestLastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestLastName

`func (o *RoomKeyStatus) SetGuestLastName(v string)`

SetGuestLastName sets GuestLastName field to given value.

### HasGuestLastName

`func (o *RoomKeyStatus) HasGuestLastName() bool`

HasGuestLastName returns a boolean if a field has been set.

### GetKeyOptions

`func (o *RoomKeyStatus) GetKeyOptions() string`

GetKeyOptions returns the KeyOptions field if non-nil, zero value otherwise.

### GetKeyOptionsOk

`func (o *RoomKeyStatus) GetKeyOptionsOk() (*string, bool)`

GetKeyOptionsOk returns a tuple with the KeyOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyOptions

`func (o *RoomKeyStatus) SetKeyOptions(v string)`

SetKeyOptions sets KeyOptions field to given value.

### HasKeyOptions

`func (o *RoomKeyStatus) HasKeyOptions() bool`

HasKeyOptions returns a boolean if a field has been set.

### GetLinks

`func (o *RoomKeyStatus) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomKeyStatus) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomKeyStatus) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomKeyStatus) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoom

`func (o *RoomKeyStatus) GetRoom() string`

GetRoom returns the Room field if non-nil, zero value otherwise.

### GetRoomOk

`func (o *RoomKeyStatus) GetRoomOk() (*string, bool)`

GetRoomOk returns a tuple with the Room field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoom

`func (o *RoomKeyStatus) SetRoom(v string)`

SetRoom sets Room field to given value.

### HasRoom

`func (o *RoomKeyStatus) HasRoom() bool`

HasRoom returns a boolean if a field has been set.

### GetValidUntil

`func (o *RoomKeyStatus) GetValidUntil() string`

GetValidUntil returns the ValidUntil field if non-nil, zero value otherwise.

### GetValidUntilOk

`func (o *RoomKeyStatus) GetValidUntilOk() (*string, bool)`

GetValidUntilOk returns a tuple with the ValidUntil field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidUntil

`func (o *RoomKeyStatus) SetValidUntil(v string)`

SetValidUntil sets ValidUntil field to given value.

### HasValidUntil

`func (o *RoomKeyStatus) HasValidUntil() bool`

HasValidUntil returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomKeyStatus) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomKeyStatus) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomKeyStatus) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomKeyStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


