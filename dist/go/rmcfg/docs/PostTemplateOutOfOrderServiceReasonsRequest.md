# PostTemplateOutOfOrderServiceReasonsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateOutOfOrderServiceReasons** | Pointer to [**[]TemplateOutOfOrderServiceReasonType**](TemplateOutOfOrderServiceReasonType.md) | Template of out of order/service reason details. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostTemplateOutOfOrderServiceReasonsRequest

`func NewPostTemplateOutOfOrderServiceReasonsRequest() *PostTemplateOutOfOrderServiceReasonsRequest`

NewPostTemplateOutOfOrderServiceReasonsRequest instantiates a new PostTemplateOutOfOrderServiceReasonsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostTemplateOutOfOrderServiceReasonsRequestWithDefaults

`func NewPostTemplateOutOfOrderServiceReasonsRequestWithDefaults() *PostTemplateOutOfOrderServiceReasonsRequest`

NewPostTemplateOutOfOrderServiceReasonsRequestWithDefaults instantiates a new PostTemplateOutOfOrderServiceReasonsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostTemplateOutOfOrderServiceReasonsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostTemplateOutOfOrderServiceReasonsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostTemplateOutOfOrderServiceReasonsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostTemplateOutOfOrderServiceReasonsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateOutOfOrderServiceReasons

`func (o *PostTemplateOutOfOrderServiceReasonsRequest) GetTemplateOutOfOrderServiceReasons() []TemplateOutOfOrderServiceReasonType`

GetTemplateOutOfOrderServiceReasons returns the TemplateOutOfOrderServiceReasons field if non-nil, zero value otherwise.

### GetTemplateOutOfOrderServiceReasonsOk

`func (o *PostTemplateOutOfOrderServiceReasonsRequest) GetTemplateOutOfOrderServiceReasonsOk() (*[]TemplateOutOfOrderServiceReasonType, bool)`

GetTemplateOutOfOrderServiceReasonsOk returns a tuple with the TemplateOutOfOrderServiceReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateOutOfOrderServiceReasons

`func (o *PostTemplateOutOfOrderServiceReasonsRequest) SetTemplateOutOfOrderServiceReasons(v []TemplateOutOfOrderServiceReasonType)`

SetTemplateOutOfOrderServiceReasons sets TemplateOutOfOrderServiceReasons field to given value.

### HasTemplateOutOfOrderServiceReasons

`func (o *PostTemplateOutOfOrderServiceReasonsRequest) HasTemplateOutOfOrderServiceReasons() bool`

HasTemplateOutOfOrderServiceReasons returns a boolean if a field has been set.

### GetWarnings

`func (o *PostTemplateOutOfOrderServiceReasonsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostTemplateOutOfOrderServiceReasonsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostTemplateOutOfOrderServiceReasonsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostTemplateOutOfOrderServiceReasonsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


