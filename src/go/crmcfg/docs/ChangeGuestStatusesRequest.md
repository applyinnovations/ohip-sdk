# ChangeGuestStatusesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestStatuses** | Pointer to [**GuestStatusesType**](GuestStatusesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeGuestStatusesRequest

`func NewChangeGuestStatusesRequest() *ChangeGuestStatusesRequest`

NewChangeGuestStatusesRequest instantiates a new ChangeGuestStatusesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeGuestStatusesRequestWithDefaults

`func NewChangeGuestStatusesRequestWithDefaults() *ChangeGuestStatusesRequest`

NewChangeGuestStatusesRequestWithDefaults instantiates a new ChangeGuestStatusesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestStatuses

`func (o *ChangeGuestStatusesRequest) GetGuestStatuses() GuestStatusesType`

GetGuestStatuses returns the GuestStatuses field if non-nil, zero value otherwise.

### GetGuestStatusesOk

`func (o *ChangeGuestStatusesRequest) GetGuestStatusesOk() (*GuestStatusesType, bool)`

GetGuestStatusesOk returns a tuple with the GuestStatuses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestStatuses

`func (o *ChangeGuestStatusesRequest) SetGuestStatuses(v GuestStatusesType)`

SetGuestStatuses sets GuestStatuses field to given value.

### HasGuestStatuses

`func (o *ChangeGuestStatusesRequest) HasGuestStatuses() bool`

HasGuestStatuses returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeGuestStatusesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeGuestStatusesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeGuestStatusesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeGuestStatusesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeGuestStatusesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeGuestStatusesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeGuestStatusesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeGuestStatusesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


