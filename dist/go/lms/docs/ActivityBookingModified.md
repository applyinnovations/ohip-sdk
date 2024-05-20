# ActivityBookingModified

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityBooking** | Pointer to [**ActivityBookingRSType**](ActivityBookingRSType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewActivityBookingModified

`func NewActivityBookingModified() *ActivityBookingModified`

NewActivityBookingModified instantiates a new ActivityBookingModified object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityBookingModifiedWithDefaults

`func NewActivityBookingModifiedWithDefaults() *ActivityBookingModified`

NewActivityBookingModifiedWithDefaults instantiates a new ActivityBookingModified object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityBooking

`func (o *ActivityBookingModified) GetActivityBooking() ActivityBookingRSType`

GetActivityBooking returns the ActivityBooking field if non-nil, zero value otherwise.

### GetActivityBookingOk

`func (o *ActivityBookingModified) GetActivityBookingOk() (*ActivityBookingRSType, bool)`

GetActivityBookingOk returns a tuple with the ActivityBooking field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityBooking

`func (o *ActivityBookingModified) SetActivityBooking(v ActivityBookingRSType)`

SetActivityBooking sets ActivityBooking field to given value.

### HasActivityBooking

`func (o *ActivityBookingModified) HasActivityBooking() bool`

HasActivityBooking returns a boolean if a field has been set.

### GetLinks

`func (o *ActivityBookingModified) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ActivityBookingModified) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ActivityBookingModified) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ActivityBookingModified) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ActivityBookingModified) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ActivityBookingModified) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ActivityBookingModified) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ActivityBookingModified) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


