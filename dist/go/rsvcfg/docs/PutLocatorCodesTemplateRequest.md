# PutLocatorCodesTemplateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**LocatorCodes** | Pointer to [**[]LocatorCodeTemplateType**](LocatorCodeTemplateType.md) | Collection of locator codes. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutLocatorCodesTemplateRequest

`func NewPutLocatorCodesTemplateRequest() *PutLocatorCodesTemplateRequest`

NewPutLocatorCodesTemplateRequest instantiates a new PutLocatorCodesTemplateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutLocatorCodesTemplateRequestWithDefaults

`func NewPutLocatorCodesTemplateRequestWithDefaults() *PutLocatorCodesTemplateRequest`

NewPutLocatorCodesTemplateRequestWithDefaults instantiates a new PutLocatorCodesTemplateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutLocatorCodesTemplateRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutLocatorCodesTemplateRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutLocatorCodesTemplateRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutLocatorCodesTemplateRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetLocatorCodes

`func (o *PutLocatorCodesTemplateRequest) GetLocatorCodes() []LocatorCodeTemplateType`

GetLocatorCodes returns the LocatorCodes field if non-nil, zero value otherwise.

### GetLocatorCodesOk

`func (o *PutLocatorCodesTemplateRequest) GetLocatorCodesOk() (*[]LocatorCodeTemplateType, bool)`

GetLocatorCodesOk returns a tuple with the LocatorCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocatorCodes

`func (o *PutLocatorCodesTemplateRequest) SetLocatorCodes(v []LocatorCodeTemplateType)`

SetLocatorCodes sets LocatorCodes field to given value.

### HasLocatorCodes

`func (o *PutLocatorCodesTemplateRequest) HasLocatorCodes() bool`

HasLocatorCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *PutLocatorCodesTemplateRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutLocatorCodesTemplateRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutLocatorCodesTemplateRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutLocatorCodesTemplateRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


