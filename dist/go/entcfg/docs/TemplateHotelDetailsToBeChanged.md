# TemplateHotelDetailsToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateHotelDetails** | Pointer to [**[]TemplateHotelDetailType**](TemplateHotelDetailType.md) | Collection of template level hotel details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateHotelDetailsToBeChanged

`func NewTemplateHotelDetailsToBeChanged() *TemplateHotelDetailsToBeChanged`

NewTemplateHotelDetailsToBeChanged instantiates a new TemplateHotelDetailsToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateHotelDetailsToBeChangedWithDefaults

`func NewTemplateHotelDetailsToBeChangedWithDefaults() *TemplateHotelDetailsToBeChanged`

NewTemplateHotelDetailsToBeChangedWithDefaults instantiates a new TemplateHotelDetailsToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateHotelDetails

`func (o *TemplateHotelDetailsToBeChanged) GetTemplateHotelDetails() []TemplateHotelDetailType`

GetTemplateHotelDetails returns the TemplateHotelDetails field if non-nil, zero value otherwise.

### GetTemplateHotelDetailsOk

`func (o *TemplateHotelDetailsToBeChanged) GetTemplateHotelDetailsOk() (*[]TemplateHotelDetailType, bool)`

GetTemplateHotelDetailsOk returns a tuple with the TemplateHotelDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateHotelDetails

`func (o *TemplateHotelDetailsToBeChanged) SetTemplateHotelDetails(v []TemplateHotelDetailType)`

SetTemplateHotelDetails sets TemplateHotelDetails field to given value.

### HasTemplateHotelDetails

`func (o *TemplateHotelDetailsToBeChanged) HasTemplateHotelDetails() bool`

HasTemplateHotelDetails returns a boolean if a field has been set.

### GetLinks

`func (o *TemplateHotelDetailsToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateHotelDetailsToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateHotelDetailsToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateHotelDetailsToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateHotelDetailsToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateHotelDetailsToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateHotelDetailsToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateHotelDetailsToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


