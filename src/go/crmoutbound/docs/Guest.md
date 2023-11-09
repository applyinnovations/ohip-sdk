# Guest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestIdList** | Pointer to [**ProfileIdList**](ProfileIdList.md) |  | [optional] 
**GuestDetails** | Pointer to [**GuestProfileType**](GuestProfileType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 

## Methods

### NewGuest

`func NewGuest() *Guest`

NewGuest instantiates a new Guest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuestWithDefaults

`func NewGuestWithDefaults() *Guest`

NewGuestWithDefaults instantiates a new Guest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestIdList

`func (o *Guest) GetGuestIdList() ProfileIdList`

GetGuestIdList returns the GuestIdList field if non-nil, zero value otherwise.

### GetGuestIdListOk

`func (o *Guest) GetGuestIdListOk() (*ProfileIdList, bool)`

GetGuestIdListOk returns a tuple with the GuestIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestIdList

`func (o *Guest) SetGuestIdList(v ProfileIdList)`

SetGuestIdList sets GuestIdList field to given value.

### HasGuestIdList

`func (o *Guest) HasGuestIdList() bool`

HasGuestIdList returns a boolean if a field has been set.

### GetGuestDetails

`func (o *Guest) GetGuestDetails() GuestProfileType`

GetGuestDetails returns the GuestDetails field if non-nil, zero value otherwise.

### GetGuestDetailsOk

`func (o *Guest) GetGuestDetailsOk() (*GuestProfileType, bool)`

GetGuestDetailsOk returns a tuple with the GuestDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestDetails

`func (o *Guest) SetGuestDetails(v GuestProfileType)`

SetGuestDetails sets GuestDetails field to given value.

### HasGuestDetails

`func (o *Guest) HasGuestDetails() bool`

HasGuestDetails returns a boolean if a field has been set.

### GetLinks

`func (o *Guest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Guest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Guest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Guest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


