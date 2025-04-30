# FuturePastBookings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Response** | Pointer to **bool** | response - whether there are future and/or past business blocks or reservations for the profile. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFuturePastBookings

`func NewFuturePastBookings() *FuturePastBookings`

NewFuturePastBookings instantiates a new FuturePastBookings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFuturePastBookingsWithDefaults

`func NewFuturePastBookingsWithDefaults() *FuturePastBookings`

NewFuturePastBookingsWithDefaults instantiates a new FuturePastBookings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResponse

`func (o *FuturePastBookings) GetResponse() bool`

GetResponse returns the Response field if non-nil, zero value otherwise.

### GetResponseOk

`func (o *FuturePastBookings) GetResponseOk() (*bool, bool)`

GetResponseOk returns a tuple with the Response field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponse

`func (o *FuturePastBookings) SetResponse(v bool)`

SetResponse sets Response field to given value.

### HasResponse

`func (o *FuturePastBookings) HasResponse() bool`

HasResponse returns a boolean if a field has been set.

### GetLinks

`func (o *FuturePastBookings) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FuturePastBookings) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FuturePastBookings) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FuturePastBookings) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FuturePastBookings) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FuturePastBookings) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FuturePastBookings) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FuturePastBookings) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


