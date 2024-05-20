# PayeeInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PayeeId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**PayeeName** | Pointer to **string** | Name of the payee. | [optional] 

## Methods

### NewPayeeInfoType

`func NewPayeeInfoType() *PayeeInfoType`

NewPayeeInfoType instantiates a new PayeeInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPayeeInfoTypeWithDefaults

`func NewPayeeInfoTypeWithDefaults() *PayeeInfoType`

NewPayeeInfoTypeWithDefaults instantiates a new PayeeInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPayeeId

`func (o *PayeeInfoType) GetPayeeId() UniqueIDType`

GetPayeeId returns the PayeeId field if non-nil, zero value otherwise.

### GetPayeeIdOk

`func (o *PayeeInfoType) GetPayeeIdOk() (*UniqueIDType, bool)`

GetPayeeIdOk returns a tuple with the PayeeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeId

`func (o *PayeeInfoType) SetPayeeId(v UniqueIDType)`

SetPayeeId sets PayeeId field to given value.

### HasPayeeId

`func (o *PayeeInfoType) HasPayeeId() bool`

HasPayeeId returns a boolean if a field has been set.

### GetPayeeName

`func (o *PayeeInfoType) GetPayeeName() string`

GetPayeeName returns the PayeeName field if non-nil, zero value otherwise.

### GetPayeeNameOk

`func (o *PayeeInfoType) GetPayeeNameOk() (*string, bool)`

GetPayeeNameOk returns a tuple with the PayeeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeName

`func (o *PayeeInfoType) SetPayeeName(v string)`

SetPayeeName sets PayeeName field to given value.

### HasPayeeName

`func (o *PayeeInfoType) HasPayeeName() bool`

HasPayeeName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


