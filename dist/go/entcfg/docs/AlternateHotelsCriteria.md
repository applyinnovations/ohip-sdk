# AlternateHotelsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlternateHotels** | Pointer to [**[]AlternateHotelType**](AlternateHotelType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAlternateHotelsCriteria

`func NewAlternateHotelsCriteria() *AlternateHotelsCriteria`

NewAlternateHotelsCriteria instantiates a new AlternateHotelsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAlternateHotelsCriteriaWithDefaults

`func NewAlternateHotelsCriteriaWithDefaults() *AlternateHotelsCriteria`

NewAlternateHotelsCriteriaWithDefaults instantiates a new AlternateHotelsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlternateHotels

`func (o *AlternateHotelsCriteria) GetAlternateHotels() []AlternateHotelType`

GetAlternateHotels returns the AlternateHotels field if non-nil, zero value otherwise.

### GetAlternateHotelsOk

`func (o *AlternateHotelsCriteria) GetAlternateHotelsOk() (*[]AlternateHotelType, bool)`

GetAlternateHotelsOk returns a tuple with the AlternateHotels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateHotels

`func (o *AlternateHotelsCriteria) SetAlternateHotels(v []AlternateHotelType)`

SetAlternateHotels sets AlternateHotels field to given value.

### HasAlternateHotels

`func (o *AlternateHotelsCriteria) HasAlternateHotels() bool`

HasAlternateHotels returns a boolean if a field has been set.

### GetLinks

`func (o *AlternateHotelsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AlternateHotelsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AlternateHotelsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AlternateHotelsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AlternateHotelsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AlternateHotelsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AlternateHotelsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AlternateHotelsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


