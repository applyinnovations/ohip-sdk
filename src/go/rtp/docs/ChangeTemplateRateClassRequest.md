# ChangeTemplateRateClassRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**TemplateRateClass** | Pointer to [**TemplateRateClassType**](TemplateRateClassType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeTemplateRateClassRequest

`func NewChangeTemplateRateClassRequest() *ChangeTemplateRateClassRequest`

NewChangeTemplateRateClassRequest instantiates a new ChangeTemplateRateClassRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeTemplateRateClassRequestWithDefaults

`func NewChangeTemplateRateClassRequestWithDefaults() *ChangeTemplateRateClassRequest`

NewChangeTemplateRateClassRequestWithDefaults instantiates a new ChangeTemplateRateClassRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeTemplateRateClassRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeTemplateRateClassRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeTemplateRateClassRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeTemplateRateClassRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateRateClass

`func (o *ChangeTemplateRateClassRequest) GetTemplateRateClass() TemplateRateClassType`

GetTemplateRateClass returns the TemplateRateClass field if non-nil, zero value otherwise.

### GetTemplateRateClassOk

`func (o *ChangeTemplateRateClassRequest) GetTemplateRateClassOk() (*TemplateRateClassType, bool)`

GetTemplateRateClassOk returns a tuple with the TemplateRateClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateRateClass

`func (o *ChangeTemplateRateClassRequest) SetTemplateRateClass(v TemplateRateClassType)`

SetTemplateRateClass sets TemplateRateClass field to given value.

### HasTemplateRateClass

`func (o *ChangeTemplateRateClassRequest) HasTemplateRateClass() bool`

HasTemplateRateClass returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeTemplateRateClassRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeTemplateRateClassRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeTemplateRateClassRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeTemplateRateClassRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


