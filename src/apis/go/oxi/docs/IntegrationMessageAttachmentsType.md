# IntegrationMessageAttachmentsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**XMLMsg** | Pointer to **string** | XML message details | [optional] 
**ExtMsg** | Pointer to **string** | Orignal message from external systems(From the one&#39;s that don&#39;t create XML) | [optional] 

## Methods

### NewIntegrationMessageAttachmentsType

`func NewIntegrationMessageAttachmentsType() *IntegrationMessageAttachmentsType`

NewIntegrationMessageAttachmentsType instantiates a new IntegrationMessageAttachmentsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntegrationMessageAttachmentsTypeWithDefaults

`func NewIntegrationMessageAttachmentsTypeWithDefaults() *IntegrationMessageAttachmentsType`

NewIntegrationMessageAttachmentsTypeWithDefaults instantiates a new IntegrationMessageAttachmentsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetXMLMsg

`func (o *IntegrationMessageAttachmentsType) GetXMLMsg() string`

GetXMLMsg returns the XMLMsg field if non-nil, zero value otherwise.

### GetXMLMsgOk

`func (o *IntegrationMessageAttachmentsType) GetXMLMsgOk() (*string, bool)`

GetXMLMsgOk returns a tuple with the XMLMsg field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetXMLMsg

`func (o *IntegrationMessageAttachmentsType) SetXMLMsg(v string)`

SetXMLMsg sets XMLMsg field to given value.

### HasXMLMsg

`func (o *IntegrationMessageAttachmentsType) HasXMLMsg() bool`

HasXMLMsg returns a boolean if a field has been set.

### GetExtMsg

`func (o *IntegrationMessageAttachmentsType) GetExtMsg() string`

GetExtMsg returns the ExtMsg field if non-nil, zero value otherwise.

### GetExtMsgOk

`func (o *IntegrationMessageAttachmentsType) GetExtMsgOk() (*string, bool)`

GetExtMsgOk returns a tuple with the ExtMsg field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtMsg

`func (o *IntegrationMessageAttachmentsType) SetExtMsg(v string)`

SetExtMsg sets ExtMsg field to given value.

### HasExtMsg

`func (o *IntegrationMessageAttachmentsType) HasExtMsg() bool`

HasExtMsg returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


