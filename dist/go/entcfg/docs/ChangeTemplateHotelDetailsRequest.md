# ChangeTemplateHotelDetailsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateHotelDetails** | Pointer to [**[]TemplateHotelDetailType**](TemplateHotelDetailType.md) | Collection of template level hotel details. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeTemplateHotelDetailsRequest

`func NewChangeTemplateHotelDetailsRequest() *ChangeTemplateHotelDetailsRequest`

NewChangeTemplateHotelDetailsRequest instantiates a new ChangeTemplateHotelDetailsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeTemplateHotelDetailsRequestWithDefaults

`func NewChangeTemplateHotelDetailsRequestWithDefaults() *ChangeTemplateHotelDetailsRequest`

NewChangeTemplateHotelDetailsRequestWithDefaults instantiates a new ChangeTemplateHotelDetailsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeTemplateHotelDetailsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeTemplateHotelDetailsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeTemplateHotelDetailsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeTemplateHotelDetailsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateHotelDetails

`func (o *ChangeTemplateHotelDetailsRequest) GetTemplateHotelDetails() []TemplateHotelDetailType`

GetTemplateHotelDetails returns the TemplateHotelDetails field if non-nil, zero value otherwise.

### GetTemplateHotelDetailsOk

`func (o *ChangeTemplateHotelDetailsRequest) GetTemplateHotelDetailsOk() (*[]TemplateHotelDetailType, bool)`

GetTemplateHotelDetailsOk returns a tuple with the TemplateHotelDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateHotelDetails

`func (o *ChangeTemplateHotelDetailsRequest) SetTemplateHotelDetails(v []TemplateHotelDetailType)`

SetTemplateHotelDetails sets TemplateHotelDetails field to given value.

### HasTemplateHotelDetails

`func (o *ChangeTemplateHotelDetailsRequest) HasTemplateHotelDetails() bool`

HasTemplateHotelDetails returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeTemplateHotelDetailsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeTemplateHotelDetailsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeTemplateHotelDetailsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeTemplateHotelDetailsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


