# RecentlyAccessedReservationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessDate** | Pointer to **string** | The date the record was accessed. | [optional] 
**GuestFirstName** | Pointer to **string** | Given name, first name or names | [optional] 
**GuestLastName** | Pointer to **string** | Family name, last name. | [optional] 
**HotelId** | Pointer to **string** | The resort of the reservation. | [optional] 
**HotelName** | Pointer to **string** | A text field used to communicate the proper name of the hotel. | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ReservationStatus** | Pointer to [**PMSResStatusType**](PMSResStatusType.md) |  | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 

## Methods

### NewRecentlyAccessedReservationType

`func NewRecentlyAccessedReservationType() *RecentlyAccessedReservationType`

NewRecentlyAccessedReservationType instantiates a new RecentlyAccessedReservationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecentlyAccessedReservationTypeWithDefaults

`func NewRecentlyAccessedReservationTypeWithDefaults() *RecentlyAccessedReservationType`

NewRecentlyAccessedReservationTypeWithDefaults instantiates a new RecentlyAccessedReservationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessDate

`func (o *RecentlyAccessedReservationType) GetAccessDate() string`

GetAccessDate returns the AccessDate field if non-nil, zero value otherwise.

### GetAccessDateOk

`func (o *RecentlyAccessedReservationType) GetAccessDateOk() (*string, bool)`

GetAccessDateOk returns a tuple with the AccessDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessDate

`func (o *RecentlyAccessedReservationType) SetAccessDate(v string)`

SetAccessDate sets AccessDate field to given value.

### HasAccessDate

`func (o *RecentlyAccessedReservationType) HasAccessDate() bool`

HasAccessDate returns a boolean if a field has been set.

### GetGuestFirstName

`func (o *RecentlyAccessedReservationType) GetGuestFirstName() string`

GetGuestFirstName returns the GuestFirstName field if non-nil, zero value otherwise.

### GetGuestFirstNameOk

`func (o *RecentlyAccessedReservationType) GetGuestFirstNameOk() (*string, bool)`

GetGuestFirstNameOk returns a tuple with the GuestFirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestFirstName

`func (o *RecentlyAccessedReservationType) SetGuestFirstName(v string)`

SetGuestFirstName sets GuestFirstName field to given value.

### HasGuestFirstName

`func (o *RecentlyAccessedReservationType) HasGuestFirstName() bool`

HasGuestFirstName returns a boolean if a field has been set.

### GetGuestLastName

`func (o *RecentlyAccessedReservationType) GetGuestLastName() string`

GetGuestLastName returns the GuestLastName field if non-nil, zero value otherwise.

### GetGuestLastNameOk

`func (o *RecentlyAccessedReservationType) GetGuestLastNameOk() (*string, bool)`

GetGuestLastNameOk returns a tuple with the GuestLastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestLastName

`func (o *RecentlyAccessedReservationType) SetGuestLastName(v string)`

SetGuestLastName sets GuestLastName field to given value.

### HasGuestLastName

`func (o *RecentlyAccessedReservationType) HasGuestLastName() bool`

HasGuestLastName returns a boolean if a field has been set.

### GetHotelId

`func (o *RecentlyAccessedReservationType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RecentlyAccessedReservationType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RecentlyAccessedReservationType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RecentlyAccessedReservationType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHotelName

`func (o *RecentlyAccessedReservationType) GetHotelName() string`

GetHotelName returns the HotelName field if non-nil, zero value otherwise.

### GetHotelNameOk

`func (o *RecentlyAccessedReservationType) GetHotelNameOk() (*string, bool)`

GetHotelNameOk returns a tuple with the HotelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelName

`func (o *RecentlyAccessedReservationType) SetHotelName(v string)`

SetHotelName sets HotelName field to given value.

### HasHotelName

`func (o *RecentlyAccessedReservationType) HasHotelName() bool`

HasHotelName returns a boolean if a field has been set.

### GetReservationIdList

`func (o *RecentlyAccessedReservationType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *RecentlyAccessedReservationType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *RecentlyAccessedReservationType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *RecentlyAccessedReservationType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetReservationStatus

`func (o *RecentlyAccessedReservationType) GetReservationStatus() PMSResStatusType`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *RecentlyAccessedReservationType) GetReservationStatusOk() (*PMSResStatusType, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *RecentlyAccessedReservationType) SetReservationStatus(v PMSResStatusType)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *RecentlyAccessedReservationType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.

### GetTimeSpan

`func (o *RecentlyAccessedReservationType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *RecentlyAccessedReservationType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *RecentlyAccessedReservationType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *RecentlyAccessedReservationType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


