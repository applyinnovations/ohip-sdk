# PutTaskSheetTemplateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**TaskSheetTemplateDetails** | Pointer to [**AutoGenerateTaskSheetsCriteriaType**](AutoGenerateTaskSheetsCriteriaType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutTaskSheetTemplateRequest

`func NewPutTaskSheetTemplateRequest() *PutTaskSheetTemplateRequest`

NewPutTaskSheetTemplateRequest instantiates a new PutTaskSheetTemplateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutTaskSheetTemplateRequestWithDefaults

`func NewPutTaskSheetTemplateRequestWithDefaults() *PutTaskSheetTemplateRequest`

NewPutTaskSheetTemplateRequestWithDefaults instantiates a new PutTaskSheetTemplateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutTaskSheetTemplateRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutTaskSheetTemplateRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutTaskSheetTemplateRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutTaskSheetTemplateRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTaskSheetTemplateDetails

`func (o *PutTaskSheetTemplateRequest) GetTaskSheetTemplateDetails() AutoGenerateTaskSheetsCriteriaType`

GetTaskSheetTemplateDetails returns the TaskSheetTemplateDetails field if non-nil, zero value otherwise.

### GetTaskSheetTemplateDetailsOk

`func (o *PutTaskSheetTemplateRequest) GetTaskSheetTemplateDetailsOk() (*AutoGenerateTaskSheetsCriteriaType, bool)`

GetTaskSheetTemplateDetailsOk returns a tuple with the TaskSheetTemplateDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskSheetTemplateDetails

`func (o *PutTaskSheetTemplateRequest) SetTaskSheetTemplateDetails(v AutoGenerateTaskSheetsCriteriaType)`

SetTaskSheetTemplateDetails sets TaskSheetTemplateDetails field to given value.

### HasTaskSheetTemplateDetails

`func (o *PutTaskSheetTemplateRequest) HasTaskSheetTemplateDetails() bool`

HasTaskSheetTemplateDetails returns a boolean if a field has been set.

### GetWarnings

`func (o *PutTaskSheetTemplateRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutTaskSheetTemplateRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutTaskSheetTemplateRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutTaskSheetTemplateRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


