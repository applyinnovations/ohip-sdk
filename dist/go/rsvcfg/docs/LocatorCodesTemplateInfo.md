# LocatorCodesTemplateInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**LocatorCodes** | Pointer to [**[]LocatorCodeTemplateType**](LocatorCodeTemplateType.md) | Collection of locator codes. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewLocatorCodesTemplateInfo

`func NewLocatorCodesTemplateInfo() *LocatorCodesTemplateInfo`

NewLocatorCodesTemplateInfo instantiates a new LocatorCodesTemplateInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLocatorCodesTemplateInfoWithDefaults

`func NewLocatorCodesTemplateInfoWithDefaults() *LocatorCodesTemplateInfo`

NewLocatorCodesTemplateInfoWithDefaults instantiates a new LocatorCodesTemplateInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *LocatorCodesTemplateInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *LocatorCodesTemplateInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *LocatorCodesTemplateInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *LocatorCodesTemplateInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetLocatorCodes

`func (o *LocatorCodesTemplateInfo) GetLocatorCodes() []LocatorCodeTemplateType`

GetLocatorCodes returns the LocatorCodes field if non-nil, zero value otherwise.

### GetLocatorCodesOk

`func (o *LocatorCodesTemplateInfo) GetLocatorCodesOk() (*[]LocatorCodeTemplateType, bool)`

GetLocatorCodesOk returns a tuple with the LocatorCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocatorCodes

`func (o *LocatorCodesTemplateInfo) SetLocatorCodes(v []LocatorCodeTemplateType)`

SetLocatorCodes sets LocatorCodes field to given value.

### HasLocatorCodes

`func (o *LocatorCodesTemplateInfo) HasLocatorCodes() bool`

HasLocatorCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *LocatorCodesTemplateInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *LocatorCodesTemplateInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *LocatorCodesTemplateInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *LocatorCodesTemplateInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


