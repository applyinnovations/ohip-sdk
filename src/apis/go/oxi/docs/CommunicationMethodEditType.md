# CommunicationMethodEditType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InterfaceId** | Pointer to **string** | OXI Interface ID | [optional] 
**HotelId** | Pointer to **string** | SID-RESORT for Global Level and HotelId associated with the interface for the Property Level configuration. | [optional] 
**CommunicationType** | Pointer to [**CommunicationType**](CommunicationType.md) |  | [optional] 
**CommunicationFlow** | Pointer to **string** | Attribute represents the communication flow like UPLOAD,DOWNLOAD. | [optional] 
**NewMethod** | Pointer to [**CommunicationMethodType**](CommunicationMethodType.md) |  | [optional] 

## Methods

### NewCommunicationMethodEditType

`func NewCommunicationMethodEditType() *CommunicationMethodEditType`

NewCommunicationMethodEditType instantiates a new CommunicationMethodEditType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommunicationMethodEditTypeWithDefaults

`func NewCommunicationMethodEditTypeWithDefaults() *CommunicationMethodEditType`

NewCommunicationMethodEditTypeWithDefaults instantiates a new CommunicationMethodEditType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInterfaceId

`func (o *CommunicationMethodEditType) GetInterfaceId() string`

GetInterfaceId returns the InterfaceId field if non-nil, zero value otherwise.

### GetInterfaceIdOk

`func (o *CommunicationMethodEditType) GetInterfaceIdOk() (*string, bool)`

GetInterfaceIdOk returns a tuple with the InterfaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceId

`func (o *CommunicationMethodEditType) SetInterfaceId(v string)`

SetInterfaceId sets InterfaceId field to given value.

### HasInterfaceId

`func (o *CommunicationMethodEditType) HasInterfaceId() bool`

HasInterfaceId returns a boolean if a field has been set.

### GetHotelId

`func (o *CommunicationMethodEditType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CommunicationMethodEditType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CommunicationMethodEditType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CommunicationMethodEditType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCommunicationType

`func (o *CommunicationMethodEditType) GetCommunicationType() CommunicationType`

GetCommunicationType returns the CommunicationType field if non-nil, zero value otherwise.

### GetCommunicationTypeOk

`func (o *CommunicationMethodEditType) GetCommunicationTypeOk() (*CommunicationType, bool)`

GetCommunicationTypeOk returns a tuple with the CommunicationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommunicationType

`func (o *CommunicationMethodEditType) SetCommunicationType(v CommunicationType)`

SetCommunicationType sets CommunicationType field to given value.

### HasCommunicationType

`func (o *CommunicationMethodEditType) HasCommunicationType() bool`

HasCommunicationType returns a boolean if a field has been set.

### GetCommunicationFlow

`func (o *CommunicationMethodEditType) GetCommunicationFlow() string`

GetCommunicationFlow returns the CommunicationFlow field if non-nil, zero value otherwise.

### GetCommunicationFlowOk

`func (o *CommunicationMethodEditType) GetCommunicationFlowOk() (*string, bool)`

GetCommunicationFlowOk returns a tuple with the CommunicationFlow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommunicationFlow

`func (o *CommunicationMethodEditType) SetCommunicationFlow(v string)`

SetCommunicationFlow sets CommunicationFlow field to given value.

### HasCommunicationFlow

`func (o *CommunicationMethodEditType) HasCommunicationFlow() bool`

HasCommunicationFlow returns a boolean if a field has been set.

### GetNewMethod

`func (o *CommunicationMethodEditType) GetNewMethod() CommunicationMethodType`

GetNewMethod returns the NewMethod field if non-nil, zero value otherwise.

### GetNewMethodOk

`func (o *CommunicationMethodEditType) GetNewMethodOk() (*CommunicationMethodType, bool)`

GetNewMethodOk returns a tuple with the NewMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewMethod

`func (o *CommunicationMethodEditType) SetNewMethod(v CommunicationMethodType)`

SetNewMethod sets NewMethod field to given value.

### HasNewMethod

`func (o *CommunicationMethodEditType) HasNewMethod() bool`

HasNewMethod returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


