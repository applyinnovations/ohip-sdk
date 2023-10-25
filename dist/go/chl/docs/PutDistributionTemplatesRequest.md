# PutDistributionTemplatesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DistributionTemplates** | Pointer to [**[]DistributionTemplateType**](DistributionTemplateType.md) | Information about a distribution template. | [optional] 
**HotelsDistributionTemplates** | Pointer to [**[]HotelDistributionTemplatesType**](HotelDistributionTemplatesType.md) | Information about a hotel level distribution template. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutDistributionTemplatesRequest

`func NewPutDistributionTemplatesRequest() *PutDistributionTemplatesRequest`

NewPutDistributionTemplatesRequest instantiates a new PutDistributionTemplatesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutDistributionTemplatesRequestWithDefaults

`func NewPutDistributionTemplatesRequestWithDefaults() *PutDistributionTemplatesRequest`

NewPutDistributionTemplatesRequestWithDefaults instantiates a new PutDistributionTemplatesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDistributionTemplates

`func (o *PutDistributionTemplatesRequest) GetDistributionTemplates() []DistributionTemplateType`

GetDistributionTemplates returns the DistributionTemplates field if non-nil, zero value otherwise.

### GetDistributionTemplatesOk

`func (o *PutDistributionTemplatesRequest) GetDistributionTemplatesOk() (*[]DistributionTemplateType, bool)`

GetDistributionTemplatesOk returns a tuple with the DistributionTemplates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistributionTemplates

`func (o *PutDistributionTemplatesRequest) SetDistributionTemplates(v []DistributionTemplateType)`

SetDistributionTemplates sets DistributionTemplates field to given value.

### HasDistributionTemplates

`func (o *PutDistributionTemplatesRequest) HasDistributionTemplates() bool`

HasDistributionTemplates returns a boolean if a field has been set.

### GetHotelsDistributionTemplates

`func (o *PutDistributionTemplatesRequest) GetHotelsDistributionTemplates() []HotelDistributionTemplatesType`

GetHotelsDistributionTemplates returns the HotelsDistributionTemplates field if non-nil, zero value otherwise.

### GetHotelsDistributionTemplatesOk

`func (o *PutDistributionTemplatesRequest) GetHotelsDistributionTemplatesOk() (*[]HotelDistributionTemplatesType, bool)`

GetHotelsDistributionTemplatesOk returns a tuple with the HotelsDistributionTemplates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelsDistributionTemplates

`func (o *PutDistributionTemplatesRequest) SetHotelsDistributionTemplates(v []HotelDistributionTemplatesType)`

SetHotelsDistributionTemplates sets HotelsDistributionTemplates field to given value.

### HasHotelsDistributionTemplates

`func (o *PutDistributionTemplatesRequest) HasHotelsDistributionTemplates() bool`

HasHotelsDistributionTemplates returns a boolean if a field has been set.

### GetLinks

`func (o *PutDistributionTemplatesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutDistributionTemplatesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutDistributionTemplatesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutDistributionTemplatesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutDistributionTemplatesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutDistributionTemplatesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutDistributionTemplatesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutDistributionTemplatesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


