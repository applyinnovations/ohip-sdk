# NextBlockStatusCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NextConfiguredStatusList** | Pointer to [**[]NextBlockStatusCodeInfoType**](NextBlockStatusCodeInfoType.md) | List of all configured next status codes for the main status code. | [optional] 
**NextAvailableStatusList** | Pointer to [**[]NextBlockStatusCodeInfoType**](NextBlockStatusCodeInfoType.md) | List of all configured next status codes for the main status code. | [optional] 
**Status** | Pointer to **string** | Main block status code. | [optional] 

## Methods

### NewNextBlockStatusCodeType

`func NewNextBlockStatusCodeType() *NextBlockStatusCodeType`

NewNextBlockStatusCodeType instantiates a new NextBlockStatusCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNextBlockStatusCodeTypeWithDefaults

`func NewNextBlockStatusCodeTypeWithDefaults() *NextBlockStatusCodeType`

NewNextBlockStatusCodeTypeWithDefaults instantiates a new NextBlockStatusCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNextConfiguredStatusList

`func (o *NextBlockStatusCodeType) GetNextConfiguredStatusList() []NextBlockStatusCodeInfoType`

GetNextConfiguredStatusList returns the NextConfiguredStatusList field if non-nil, zero value otherwise.

### GetNextConfiguredStatusListOk

`func (o *NextBlockStatusCodeType) GetNextConfiguredStatusListOk() (*[]NextBlockStatusCodeInfoType, bool)`

GetNextConfiguredStatusListOk returns a tuple with the NextConfiguredStatusList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextConfiguredStatusList

`func (o *NextBlockStatusCodeType) SetNextConfiguredStatusList(v []NextBlockStatusCodeInfoType)`

SetNextConfiguredStatusList sets NextConfiguredStatusList field to given value.

### HasNextConfiguredStatusList

`func (o *NextBlockStatusCodeType) HasNextConfiguredStatusList() bool`

HasNextConfiguredStatusList returns a boolean if a field has been set.

### GetNextAvailableStatusList

`func (o *NextBlockStatusCodeType) GetNextAvailableStatusList() []NextBlockStatusCodeInfoType`

GetNextAvailableStatusList returns the NextAvailableStatusList field if non-nil, zero value otherwise.

### GetNextAvailableStatusListOk

`func (o *NextBlockStatusCodeType) GetNextAvailableStatusListOk() (*[]NextBlockStatusCodeInfoType, bool)`

GetNextAvailableStatusListOk returns a tuple with the NextAvailableStatusList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextAvailableStatusList

`func (o *NextBlockStatusCodeType) SetNextAvailableStatusList(v []NextBlockStatusCodeInfoType)`

SetNextAvailableStatusList sets NextAvailableStatusList field to given value.

### HasNextAvailableStatusList

`func (o *NextBlockStatusCodeType) HasNextAvailableStatusList() bool`

HasNextAvailableStatusList returns a boolean if a field has been set.

### GetStatus

`func (o *NextBlockStatusCodeType) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *NextBlockStatusCodeType) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *NextBlockStatusCodeType) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *NextBlockStatusCodeType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


