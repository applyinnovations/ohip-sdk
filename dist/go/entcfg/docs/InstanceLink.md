# InstanceLink

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Href** | **string** | URI [RFC3986] or URI Template [RFC6570]. If the value is set to URI Template, then the \&quot;templated\&quot; property must be set to true. | 
**Rel** | **string** | Name of the link relation that, in addition to the type property, can be used to retrieve link details. For example, href or profile. | 
**Templated** | Pointer to **bool** | Boolean flag that specifies that \&quot;href\&quot; property is a URI or URI Template. If the property is a URI template, set this value to true. By default, this value is false. | [optional] [default to false]
**Method** | **string** | HTTP method for requesting the target of the link. | 
**TargetSchema** | Pointer to **string** | Link to the metadata of the resource, such as JSON-schema, that describes the resource expected when dereferencing the target resource.. | [optional] 
**OperationId** | **string** | The operationId of the path you can call to follow this link.  This allows you to look up not only the path and method, but the description of that path and any parameters you need to supply. | 
**Title** | Pointer to **string** | Exact copy of the \&quot;summary\&quot; field on the linked operation. | [optional] 

## Methods

### NewInstanceLink

`func NewInstanceLink(href string, rel string, method string, operationId string, ) *InstanceLink`

NewInstanceLink instantiates a new InstanceLink object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInstanceLinkWithDefaults

`func NewInstanceLinkWithDefaults() *InstanceLink`

NewInstanceLinkWithDefaults instantiates a new InstanceLink object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHref

`func (o *InstanceLink) GetHref() string`

GetHref returns the Href field if non-nil, zero value otherwise.

### GetHrefOk

`func (o *InstanceLink) GetHrefOk() (*string, bool)`

GetHrefOk returns a tuple with the Href field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHref

`func (o *InstanceLink) SetHref(v string)`

SetHref sets Href field to given value.


### GetRel

`func (o *InstanceLink) GetRel() string`

GetRel returns the Rel field if non-nil, zero value otherwise.

### GetRelOk

`func (o *InstanceLink) GetRelOk() (*string, bool)`

GetRelOk returns a tuple with the Rel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRel

`func (o *InstanceLink) SetRel(v string)`

SetRel sets Rel field to given value.


### GetTemplated

`func (o *InstanceLink) GetTemplated() bool`

GetTemplated returns the Templated field if non-nil, zero value otherwise.

### GetTemplatedOk

`func (o *InstanceLink) GetTemplatedOk() (*bool, bool)`

GetTemplatedOk returns a tuple with the Templated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplated

`func (o *InstanceLink) SetTemplated(v bool)`

SetTemplated sets Templated field to given value.

### HasTemplated

`func (o *InstanceLink) HasTemplated() bool`

HasTemplated returns a boolean if a field has been set.

### GetMethod

`func (o *InstanceLink) GetMethod() string`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *InstanceLink) GetMethodOk() (*string, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *InstanceLink) SetMethod(v string)`

SetMethod sets Method field to given value.


### GetTargetSchema

`func (o *InstanceLink) GetTargetSchema() string`

GetTargetSchema returns the TargetSchema field if non-nil, zero value otherwise.

### GetTargetSchemaOk

`func (o *InstanceLink) GetTargetSchemaOk() (*string, bool)`

GetTargetSchemaOk returns a tuple with the TargetSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetSchema

`func (o *InstanceLink) SetTargetSchema(v string)`

SetTargetSchema sets TargetSchema field to given value.

### HasTargetSchema

`func (o *InstanceLink) HasTargetSchema() bool`

HasTargetSchema returns a boolean if a field has been set.

### GetOperationId

`func (o *InstanceLink) GetOperationId() string`

GetOperationId returns the OperationId field if non-nil, zero value otherwise.

### GetOperationIdOk

`func (o *InstanceLink) GetOperationIdOk() (*string, bool)`

GetOperationIdOk returns a tuple with the OperationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperationId

`func (o *InstanceLink) SetOperationId(v string)`

SetOperationId sets OperationId field to given value.


### GetTitle

`func (o *InstanceLink) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *InstanceLink) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *InstanceLink) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *InstanceLink) HasTitle() bool`

HasTitle returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


