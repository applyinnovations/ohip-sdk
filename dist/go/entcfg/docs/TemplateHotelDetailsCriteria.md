# TemplateHotelDetailsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateHotelDetails** | Pointer to [**[]TemplateHotelDetailType**](TemplateHotelDetailType.md) | Collection of template level hotel details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateHotelDetailsCriteria

`func NewTemplateHotelDetailsCriteria() *TemplateHotelDetailsCriteria`

NewTemplateHotelDetailsCriteria instantiates a new TemplateHotelDetailsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateHotelDetailsCriteriaWithDefaults

`func NewTemplateHotelDetailsCriteriaWithDefaults() *TemplateHotelDetailsCriteria`

NewTemplateHotelDetailsCriteriaWithDefaults instantiates a new TemplateHotelDetailsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateHotelDetails

`func (o *TemplateHotelDetailsCriteria) GetTemplateHotelDetails() []TemplateHotelDetailType`

GetTemplateHotelDetails returns the TemplateHotelDetails field if non-nil, zero value otherwise.

### GetTemplateHotelDetailsOk

`func (o *TemplateHotelDetailsCriteria) GetTemplateHotelDetailsOk() (*[]TemplateHotelDetailType, bool)`

GetTemplateHotelDetailsOk returns a tuple with the TemplateHotelDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateHotelDetails

`func (o *TemplateHotelDetailsCriteria) SetTemplateHotelDetails(v []TemplateHotelDetailType)`

SetTemplateHotelDetails sets TemplateHotelDetails field to given value.

### HasTemplateHotelDetails

`func (o *TemplateHotelDetailsCriteria) HasTemplateHotelDetails() bool`

HasTemplateHotelDetails returns a boolean if a field has been set.

### GetLinks

`func (o *TemplateHotelDetailsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateHotelDetailsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateHotelDetailsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateHotelDetailsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateHotelDetailsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateHotelDetailsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateHotelDetailsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateHotelDetailsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


