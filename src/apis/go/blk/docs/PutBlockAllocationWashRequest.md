# PutBlockAllocationWashRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockAllocationWashType** | Pointer to [**BlockAllocationWashType**](BlockAllocationWashType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutBlockAllocationWashRequest

`func NewPutBlockAllocationWashRequest() *PutBlockAllocationWashRequest`

NewPutBlockAllocationWashRequest instantiates a new PutBlockAllocationWashRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutBlockAllocationWashRequestWithDefaults

`func NewPutBlockAllocationWashRequestWithDefaults() *PutBlockAllocationWashRequest`

NewPutBlockAllocationWashRequestWithDefaults instantiates a new PutBlockAllocationWashRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockAllocationWashType

`func (o *PutBlockAllocationWashRequest) GetBlockAllocationWashType() BlockAllocationWashType`

GetBlockAllocationWashType returns the BlockAllocationWashType field if non-nil, zero value otherwise.

### GetBlockAllocationWashTypeOk

`func (o *PutBlockAllocationWashRequest) GetBlockAllocationWashTypeOk() (*BlockAllocationWashType, bool)`

GetBlockAllocationWashTypeOk returns a tuple with the BlockAllocationWashType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockAllocationWashType

`func (o *PutBlockAllocationWashRequest) SetBlockAllocationWashType(v BlockAllocationWashType)`

SetBlockAllocationWashType sets BlockAllocationWashType field to given value.

### HasBlockAllocationWashType

`func (o *PutBlockAllocationWashRequest) HasBlockAllocationWashType() bool`

HasBlockAllocationWashType returns a boolean if a field has been set.

### GetLinks

`func (o *PutBlockAllocationWashRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutBlockAllocationWashRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutBlockAllocationWashRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutBlockAllocationWashRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutBlockAllocationWashRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutBlockAllocationWashRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutBlockAllocationWashRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutBlockAllocationWashRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


