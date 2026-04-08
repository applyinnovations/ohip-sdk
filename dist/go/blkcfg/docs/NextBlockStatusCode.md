# NextBlockStatusCode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NextBlockStatusCodeList** | Pointer to [**[]NextBlockStatusCodeType**](NextBlockStatusCodeType.md) | Block status code with its next configured and/or available status codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewNextBlockStatusCode

`func NewNextBlockStatusCode() *NextBlockStatusCode`

NewNextBlockStatusCode instantiates a new NextBlockStatusCode object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNextBlockStatusCodeWithDefaults

`func NewNextBlockStatusCodeWithDefaults() *NextBlockStatusCode`

NewNextBlockStatusCodeWithDefaults instantiates a new NextBlockStatusCode object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNextBlockStatusCodeList

`func (o *NextBlockStatusCode) GetNextBlockStatusCodeList() []NextBlockStatusCodeType`

GetNextBlockStatusCodeList returns the NextBlockStatusCodeList field if non-nil, zero value otherwise.

### GetNextBlockStatusCodeListOk

`func (o *NextBlockStatusCode) GetNextBlockStatusCodeListOk() (*[]NextBlockStatusCodeType, bool)`

GetNextBlockStatusCodeListOk returns a tuple with the NextBlockStatusCodeList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextBlockStatusCodeList

`func (o *NextBlockStatusCode) SetNextBlockStatusCodeList(v []NextBlockStatusCodeType)`

SetNextBlockStatusCodeList sets NextBlockStatusCodeList field to given value.

### HasNextBlockStatusCodeList

`func (o *NextBlockStatusCode) HasNextBlockStatusCodeList() bool`

HasNextBlockStatusCodeList returns a boolean if a field has been set.

### GetLinks

`func (o *NextBlockStatusCode) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *NextBlockStatusCode) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *NextBlockStatusCode) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *NextBlockStatusCode) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *NextBlockStatusCode) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *NextBlockStatusCode) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *NextBlockStatusCode) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *NextBlockStatusCode) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


