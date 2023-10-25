# PutBlockStatusRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BackgroundProcessMode** | Pointer to **bool** | Indicator if the request is to be submitted as a background process. | [optional] 
**BlocksStatus** | Pointer to **map[string]interface{}** | Contains the booking status of the business block. | [optional] 
**ChangeBlockStatus** | Pointer to [**ChangeBlockStatusType**](ChangeBlockStatusType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**VerificationOnly** | Pointer to **bool** | Indicator if the request is a verification on whether the block status can be changed. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutBlockStatusRequest

`func NewPutBlockStatusRequest() *PutBlockStatusRequest`

NewPutBlockStatusRequest instantiates a new PutBlockStatusRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutBlockStatusRequestWithDefaults

`func NewPutBlockStatusRequestWithDefaults() *PutBlockStatusRequest`

NewPutBlockStatusRequestWithDefaults instantiates a new PutBlockStatusRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBackgroundProcessMode

`func (o *PutBlockStatusRequest) GetBackgroundProcessMode() bool`

GetBackgroundProcessMode returns the BackgroundProcessMode field if non-nil, zero value otherwise.

### GetBackgroundProcessModeOk

`func (o *PutBlockStatusRequest) GetBackgroundProcessModeOk() (*bool, bool)`

GetBackgroundProcessModeOk returns a tuple with the BackgroundProcessMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackgroundProcessMode

`func (o *PutBlockStatusRequest) SetBackgroundProcessMode(v bool)`

SetBackgroundProcessMode sets BackgroundProcessMode field to given value.

### HasBackgroundProcessMode

`func (o *PutBlockStatusRequest) HasBackgroundProcessMode() bool`

HasBackgroundProcessMode returns a boolean if a field has been set.

### GetBlocksStatus

`func (o *PutBlockStatusRequest) GetBlocksStatus() map[string]interface{}`

GetBlocksStatus returns the BlocksStatus field if non-nil, zero value otherwise.

### GetBlocksStatusOk

`func (o *PutBlockStatusRequest) GetBlocksStatusOk() (*map[string]interface{}, bool)`

GetBlocksStatusOk returns a tuple with the BlocksStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlocksStatus

`func (o *PutBlockStatusRequest) SetBlocksStatus(v map[string]interface{})`

SetBlocksStatus sets BlocksStatus field to given value.

### HasBlocksStatus

`func (o *PutBlockStatusRequest) HasBlocksStatus() bool`

HasBlocksStatus returns a boolean if a field has been set.

### GetChangeBlockStatus

`func (o *PutBlockStatusRequest) GetChangeBlockStatus() ChangeBlockStatusType`

GetChangeBlockStatus returns the ChangeBlockStatus field if non-nil, zero value otherwise.

### GetChangeBlockStatusOk

`func (o *PutBlockStatusRequest) GetChangeBlockStatusOk() (*ChangeBlockStatusType, bool)`

GetChangeBlockStatusOk returns a tuple with the ChangeBlockStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeBlockStatus

`func (o *PutBlockStatusRequest) SetChangeBlockStatus(v ChangeBlockStatusType)`

SetChangeBlockStatus sets ChangeBlockStatus field to given value.

### HasChangeBlockStatus

`func (o *PutBlockStatusRequest) HasChangeBlockStatus() bool`

HasChangeBlockStatus returns a boolean if a field has been set.

### GetLinks

`func (o *PutBlockStatusRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutBlockStatusRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutBlockStatusRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutBlockStatusRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetVerificationOnly

`func (o *PutBlockStatusRequest) GetVerificationOnly() bool`

GetVerificationOnly returns the VerificationOnly field if non-nil, zero value otherwise.

### GetVerificationOnlyOk

`func (o *PutBlockStatusRequest) GetVerificationOnlyOk() (*bool, bool)`

GetVerificationOnlyOk returns a tuple with the VerificationOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerificationOnly

`func (o *PutBlockStatusRequest) SetVerificationOnly(v bool)`

SetVerificationOnly sets VerificationOnly field to given value.

### HasVerificationOnly

`func (o *PutBlockStatusRequest) HasVerificationOnly() bool`

HasVerificationOnly returns a boolean if a field has been set.

### GetWarnings

`func (o *PutBlockStatusRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutBlockStatusRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutBlockStatusRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutBlockStatusRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


