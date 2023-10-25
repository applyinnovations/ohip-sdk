# PostTemplateRateClassRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateRateClass** | Pointer to [**TemplateRateClassType**](TemplateRateClassType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostTemplateRateClassRequest

`func NewPostTemplateRateClassRequest() *PostTemplateRateClassRequest`

NewPostTemplateRateClassRequest instantiates a new PostTemplateRateClassRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostTemplateRateClassRequestWithDefaults

`func NewPostTemplateRateClassRequestWithDefaults() *PostTemplateRateClassRequest`

NewPostTemplateRateClassRequestWithDefaults instantiates a new PostTemplateRateClassRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostTemplateRateClassRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostTemplateRateClassRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostTemplateRateClassRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostTemplateRateClassRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateRateClass

`func (o *PostTemplateRateClassRequest) GetTemplateRateClass() TemplateRateClassType`

GetTemplateRateClass returns the TemplateRateClass field if non-nil, zero value otherwise.

### GetTemplateRateClassOk

`func (o *PostTemplateRateClassRequest) GetTemplateRateClassOk() (*TemplateRateClassType, bool)`

GetTemplateRateClassOk returns a tuple with the TemplateRateClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateRateClass

`func (o *PostTemplateRateClassRequest) SetTemplateRateClass(v TemplateRateClassType)`

SetTemplateRateClass sets TemplateRateClass field to given value.

### HasTemplateRateClass

`func (o *PostTemplateRateClassRequest) HasTemplateRateClass() bool`

HasTemplateRateClass returns a boolean if a field has been set.

### GetWarnings

`func (o *PostTemplateRateClassRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostTemplateRateClassRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostTemplateRateClassRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostTemplateRateClassRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


