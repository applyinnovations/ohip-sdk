# ActivityBookingsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityLookUpList** | Pointer to [**[]FetchActivityBookingsType**](FetchActivityBookingsType.md) | Criteria for fetching Activity Bookings. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewActivityBookingsDetails

`func NewActivityBookingsDetails() *ActivityBookingsDetails`

NewActivityBookingsDetails instantiates a new ActivityBookingsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityBookingsDetailsWithDefaults

`func NewActivityBookingsDetailsWithDefaults() *ActivityBookingsDetails`

NewActivityBookingsDetailsWithDefaults instantiates a new ActivityBookingsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityLookUpList

`func (o *ActivityBookingsDetails) GetActivityLookUpList() []FetchActivityBookingsType`

GetActivityLookUpList returns the ActivityLookUpList field if non-nil, zero value otherwise.

### GetActivityLookUpListOk

`func (o *ActivityBookingsDetails) GetActivityLookUpListOk() (*[]FetchActivityBookingsType, bool)`

GetActivityLookUpListOk returns a tuple with the ActivityLookUpList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityLookUpList

`func (o *ActivityBookingsDetails) SetActivityLookUpList(v []FetchActivityBookingsType)`

SetActivityLookUpList sets ActivityLookUpList field to given value.

### HasActivityLookUpList

`func (o *ActivityBookingsDetails) HasActivityLookUpList() bool`

HasActivityLookUpList returns a boolean if a field has been set.

### GetLinks

`func (o *ActivityBookingsDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ActivityBookingsDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ActivityBookingsDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ActivityBookingsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ActivityBookingsDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ActivityBookingsDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ActivityBookingsDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ActivityBookingsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


