# ChangeTemplateMarketCodeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateMarketCode** | Pointer to [**TemplateMarketCodeType**](TemplateMarketCodeType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeTemplateMarketCodeRequest

`func NewChangeTemplateMarketCodeRequest() *ChangeTemplateMarketCodeRequest`

NewChangeTemplateMarketCodeRequest instantiates a new ChangeTemplateMarketCodeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeTemplateMarketCodeRequestWithDefaults

`func NewChangeTemplateMarketCodeRequestWithDefaults() *ChangeTemplateMarketCodeRequest`

NewChangeTemplateMarketCodeRequestWithDefaults instantiates a new ChangeTemplateMarketCodeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeTemplateMarketCodeRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeTemplateMarketCodeRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeTemplateMarketCodeRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeTemplateMarketCodeRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateMarketCode

`func (o *ChangeTemplateMarketCodeRequest) GetTemplateMarketCode() TemplateMarketCodeType`

GetTemplateMarketCode returns the TemplateMarketCode field if non-nil, zero value otherwise.

### GetTemplateMarketCodeOk

`func (o *ChangeTemplateMarketCodeRequest) GetTemplateMarketCodeOk() (*TemplateMarketCodeType, bool)`

GetTemplateMarketCodeOk returns a tuple with the TemplateMarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateMarketCode

`func (o *ChangeTemplateMarketCodeRequest) SetTemplateMarketCode(v TemplateMarketCodeType)`

SetTemplateMarketCode sets TemplateMarketCode field to given value.

### HasTemplateMarketCode

`func (o *ChangeTemplateMarketCodeRequest) HasTemplateMarketCode() bool`

HasTemplateMarketCode returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeTemplateMarketCodeRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeTemplateMarketCodeRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeTemplateMarketCodeRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeTemplateMarketCodeRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


