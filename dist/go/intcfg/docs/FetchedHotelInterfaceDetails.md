# FetchedHotelInterfaceDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Details** | Pointer to [**HotelInterfaceDetailType**](HotelInterfaceDetailType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchedHotelInterfaceDetails

`func NewFetchedHotelInterfaceDetails() *FetchedHotelInterfaceDetails`

NewFetchedHotelInterfaceDetails instantiates a new FetchedHotelInterfaceDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchedHotelInterfaceDetailsWithDefaults

`func NewFetchedHotelInterfaceDetailsWithDefaults() *FetchedHotelInterfaceDetails`

NewFetchedHotelInterfaceDetailsWithDefaults instantiates a new FetchedHotelInterfaceDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetails

`func (o *FetchedHotelInterfaceDetails) GetDetails() HotelInterfaceDetailType`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *FetchedHotelInterfaceDetails) GetDetailsOk() (*HotelInterfaceDetailType, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *FetchedHotelInterfaceDetails) SetDetails(v HotelInterfaceDetailType)`

SetDetails sets Details field to given value.

### HasDetails

`func (o *FetchedHotelInterfaceDetails) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### GetLinks

`func (o *FetchedHotelInterfaceDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchedHotelInterfaceDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchedHotelInterfaceDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchedHotelInterfaceDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchedHotelInterfaceDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchedHotelInterfaceDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchedHotelInterfaceDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchedHotelInterfaceDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


