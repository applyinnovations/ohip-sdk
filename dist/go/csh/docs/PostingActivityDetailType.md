# PostingActivityDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**Activity** | Pointer to [**ActivityLogType**](ActivityLogType.md) |  | [optional] 
**OldInfo** | Pointer to [**[]SummaryPostingType**](SummaryPostingType.md) | List of postings. | [optional] 
**NewInfo** | Pointer to [**[]SummaryPostingType**](SummaryPostingType.md) | List of postings. | [optional] 

## Methods

### NewPostingActivityDetailType

`func NewPostingActivityDetailType() *PostingActivityDetailType`

NewPostingActivityDetailType instantiates a new PostingActivityDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostingActivityDetailTypeWithDefaults

`func NewPostingActivityDetailTypeWithDefaults() *PostingActivityDetailType`

NewPostingActivityDetailTypeWithDefaults instantiates a new PostingActivityDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *PostingActivityDetailType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PostingActivityDetailType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PostingActivityDetailType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PostingActivityDetailType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *PostingActivityDetailType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *PostingActivityDetailType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *PostingActivityDetailType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *PostingActivityDetailType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetActivity

`func (o *PostingActivityDetailType) GetActivity() ActivityLogType`

GetActivity returns the Activity field if non-nil, zero value otherwise.

### GetActivityOk

`func (o *PostingActivityDetailType) GetActivityOk() (*ActivityLogType, bool)`

GetActivityOk returns a tuple with the Activity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivity

`func (o *PostingActivityDetailType) SetActivity(v ActivityLogType)`

SetActivity sets Activity field to given value.

### HasActivity

`func (o *PostingActivityDetailType) HasActivity() bool`

HasActivity returns a boolean if a field has been set.

### GetOldInfo

`func (o *PostingActivityDetailType) GetOldInfo() []SummaryPostingType`

GetOldInfo returns the OldInfo field if non-nil, zero value otherwise.

### GetOldInfoOk

`func (o *PostingActivityDetailType) GetOldInfoOk() (*[]SummaryPostingType, bool)`

GetOldInfoOk returns a tuple with the OldInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldInfo

`func (o *PostingActivityDetailType) SetOldInfo(v []SummaryPostingType)`

SetOldInfo sets OldInfo field to given value.

### HasOldInfo

`func (o *PostingActivityDetailType) HasOldInfo() bool`

HasOldInfo returns a boolean if a field has been set.

### GetNewInfo

`func (o *PostingActivityDetailType) GetNewInfo() []SummaryPostingType`

GetNewInfo returns the NewInfo field if non-nil, zero value otherwise.

### GetNewInfoOk

`func (o *PostingActivityDetailType) GetNewInfoOk() (*[]SummaryPostingType, bool)`

GetNewInfoOk returns a tuple with the NewInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewInfo

`func (o *PostingActivityDetailType) SetNewInfo(v []SummaryPostingType)`

SetNewInfo sets NewInfo field to given value.

### HasNewInfo

`func (o *PostingActivityDetailType) HasNewInfo() bool`

HasNewInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


