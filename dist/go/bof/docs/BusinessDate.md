# BusinessDate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Hotels** | Pointer to [**[]HotelActiveEndOfDayType**](HotelActiveEndOfDayType.md) | Collection of hotels and its active end of days. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBusinessDate

`func NewBusinessDate() *BusinessDate`

NewBusinessDate instantiates a new BusinessDate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBusinessDateWithDefaults

`func NewBusinessDateWithDefaults() *BusinessDate`

NewBusinessDateWithDefaults instantiates a new BusinessDate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotels

`func (o *BusinessDate) GetHotels() []HotelActiveEndOfDayType`

GetHotels returns the Hotels field if non-nil, zero value otherwise.

### GetHotelsOk

`func (o *BusinessDate) GetHotelsOk() (*[]HotelActiveEndOfDayType, bool)`

GetHotelsOk returns a tuple with the Hotels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotels

`func (o *BusinessDate) SetHotels(v []HotelActiveEndOfDayType)`

SetHotels sets Hotels field to given value.

### HasHotels

`func (o *BusinessDate) HasHotels() bool`

HasHotels returns a boolean if a field has been set.

### GetLinks

`func (o *BusinessDate) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BusinessDate) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BusinessDate) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BusinessDate) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BusinessDate) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BusinessDate) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BusinessDate) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BusinessDate) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


