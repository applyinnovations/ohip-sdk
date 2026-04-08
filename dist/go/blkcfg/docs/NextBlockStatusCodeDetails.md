# NextBlockStatusCodeDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NextBlockStatusCodeList** | Pointer to [**[]NextBlockStatusCodeType**](NextBlockStatusCodeType.md) | Block status code with its next configured and/or available status codes. | [optional] 
**BlockStatusCodeMasterList** | Pointer to [**[]BlockStatusCodeType**](BlockStatusCodeType.md) | Block status code information. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewNextBlockStatusCodeDetails

`func NewNextBlockStatusCodeDetails() *NextBlockStatusCodeDetails`

NewNextBlockStatusCodeDetails instantiates a new NextBlockStatusCodeDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNextBlockStatusCodeDetailsWithDefaults

`func NewNextBlockStatusCodeDetailsWithDefaults() *NextBlockStatusCodeDetails`

NewNextBlockStatusCodeDetailsWithDefaults instantiates a new NextBlockStatusCodeDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNextBlockStatusCodeList

`func (o *NextBlockStatusCodeDetails) GetNextBlockStatusCodeList() []NextBlockStatusCodeType`

GetNextBlockStatusCodeList returns the NextBlockStatusCodeList field if non-nil, zero value otherwise.

### GetNextBlockStatusCodeListOk

`func (o *NextBlockStatusCodeDetails) GetNextBlockStatusCodeListOk() (*[]NextBlockStatusCodeType, bool)`

GetNextBlockStatusCodeListOk returns a tuple with the NextBlockStatusCodeList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextBlockStatusCodeList

`func (o *NextBlockStatusCodeDetails) SetNextBlockStatusCodeList(v []NextBlockStatusCodeType)`

SetNextBlockStatusCodeList sets NextBlockStatusCodeList field to given value.

### HasNextBlockStatusCodeList

`func (o *NextBlockStatusCodeDetails) HasNextBlockStatusCodeList() bool`

HasNextBlockStatusCodeList returns a boolean if a field has been set.

### GetBlockStatusCodeMasterList

`func (o *NextBlockStatusCodeDetails) GetBlockStatusCodeMasterList() []BlockStatusCodeType`

GetBlockStatusCodeMasterList returns the BlockStatusCodeMasterList field if non-nil, zero value otherwise.

### GetBlockStatusCodeMasterListOk

`func (o *NextBlockStatusCodeDetails) GetBlockStatusCodeMasterListOk() (*[]BlockStatusCodeType, bool)`

GetBlockStatusCodeMasterListOk returns a tuple with the BlockStatusCodeMasterList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockStatusCodeMasterList

`func (o *NextBlockStatusCodeDetails) SetBlockStatusCodeMasterList(v []BlockStatusCodeType)`

SetBlockStatusCodeMasterList sets BlockStatusCodeMasterList field to given value.

### HasBlockStatusCodeMasterList

`func (o *NextBlockStatusCodeDetails) HasBlockStatusCodeMasterList() bool`

HasBlockStatusCodeMasterList returns a boolean if a field has been set.

### GetLinks

`func (o *NextBlockStatusCodeDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *NextBlockStatusCodeDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *NextBlockStatusCodeDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *NextBlockStatusCodeDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *NextBlockStatusCodeDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *NextBlockStatusCodeDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *NextBlockStatusCodeDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *NextBlockStatusCodeDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


